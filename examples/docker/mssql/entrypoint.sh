#!/usr/bin/env bash

set -e

INITDB_FOLDER="/opt/mssql-scripts"
TMP_DIR="/tmp"

function sqlcmd() {
  file=${1?"Sql file must be provided as a parameter"}
  /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "${SA_PASSWORD}" -i "${file}"
  echo "$file imported successfully"
}

function initialize_app_database() {
    # Restore the application database using .sql files
    shopt -s globstar nullglob
    for file in "$INITDB_FOLDER"/*.sql; do
        sqlcmd "$file"
    done

    # Restore the application database using .sql.gz files
    shopt -s globstar nullglob
    for file in "$INITDB_FOLDER"/*.sql.gz; do
        echo "Uncompressing $file to $TMP_DIR"
        filename=$(basename "$file")
        uncompressed_file="$TMP_DIR/${filename//.gz/}"
        # TODO Check if it's possible to pipe output directly to sqlcmd (checked  -i -, however it didn´t seem to be supported ). as an alternative mkfifo can be reviewed as well
        gunzip --keep --stdout "$file" > "$uncompressed_file"
        sqlcmd "$uncompressed_file"
    done

    # Restore the application database using .sh files
    shopt -s globstar nullglob
    for file in "$INITDB_FOLDER"/*.sh; do
        echo "Importing $file"
        if [ -x "$file" ]; then
            "$file"
        else
            source "$file"
        fi
    done

    # Note that the container has been initialized so future starts won't wipe changes to the data
    touch /tmp/app-initialized
    echo "Initialized!"
}

if [ "$1" == '/opt/mssql/bin/sqlservr' ]; then
    # If this is the container's first run, initialize the application database
    if [ ! -f /tmp/app-initialized ]; then
        # Wait a bit for SQL Server to start. SQL Server's process doesn't provide a clever way to check if it's up or not, and it needs to be up before we can import the application database
        sleep 15s
    
        # Initialize the application database asynchronously in a background process. This allows a) the SQL Server process to be the main process in the container, which allows graceful shutdown and other goodies, and b) us to only start the SQL Server process once, as opposed to starting, stopping, then starting it again.
        initialize_app_database &
    fi
fi

exec "$@"
