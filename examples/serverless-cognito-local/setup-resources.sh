#!/bin/sh

# Create a user pool
aws --endpoint http://localhost:9229 cognito-idp create-user-pool --pool-name $COGNITO_POOL_NAME > /tmp/$COGNITO_POOL_NAME-create-user-pool
USER_POOL_ID=$(grep -E '"Id":' /tmp/$COGNITO_POOL_NAME-create-user-pool | awk -F'"' '{print $4}')
echo "Created user pool with an id of " $USER_POOL_ID


# Create a user pool client
aws --endpoint http://localhost:9229 cognito-idp create-user-pool-client --user-pool-id $USER_POOL_ID --client-name $COGNITO_CLIENT_NAME 
