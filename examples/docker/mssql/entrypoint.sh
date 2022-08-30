#!/usr/bin/env bash

set -e

function initialize_app_database() {
    # Restore the application database using .sql files
    shopt -s globstar nullglob
    for file in /opt/mssql-scripts/*.sql; do
        echo "Importing $file"
        /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "${SA_PASSWORD}" -i "${file}"
    done
    
    # Restore the application database using .sh files
    shopt -s globstar nullglob
    for file in /opt/mssql-scripts/*.sh; do
        echo "Importing $file"
        if [ -x "$file" ]; then
            "$file"
        else
            source "$file"
        fi
    done

    # Note that the container has been initialized so future starts won't wipe changes to the data
    touch /tmp/app-initialized
}

if [ "$1" = '/opt/mssql/bin/sqlservr' ]; then
    # If this is the container's first run, initialize the application database
    if [ ! -f /tmp/app-initialized ]; then
        # Wait a bit for SQL Server to start. SQL Server's process doesn't provide a clever way to check if it's up or not, and it needs to be up before we can import the application database
        sleep 15s
    
        # Initialize the application database asynchronously in a background process. This allows a) the SQL Server process to be the main process in the container, which allows graceful shutdown and other goodies, and b) us to only start the SQL Server process once, as opposed to starting, stopping, then starting it again.
        initialize_app_database &
    fi
fi

exec "$@"
