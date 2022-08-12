def getResource(id=None):
    """
    This is the resolver for the getResource field.
    
    id: The id of the resource to get.
    
    Returns: The resource with the given id.
    """

    return {
        'id': id,
        'name': f'Resource {id}'
    }

def getResources():
    """
    This is the resolver for the getResources field.
    
    Returns: The resources.
    """

    return [
        {
            'id': '1',
            'name': 'Resource 1'
        },
        {
            'id': '2',
            'name': 'Resource 2'
        }
    ]

def createResource(name=None):
    """
    This is the resolver for the createResource field.
    
    name: The name of the resource to create.
    
    Returns: The resource that was created.
    """

    return {
        'id': '1',
        'name': name
    }

def graphqlResolver(event, context):
    """
    This is the entry point for the GraphQL API.
    
    event: The event passed to the Lambda function.
    context: The context passed to the Lambda function.
    
    Returns: The response to send back to the client.
    """

    info = event['info']
    arguments = event['arguments']
    fieldName = info['fieldName']

    handlers = {
        'getResource': getResource,
        'getResources': getResources,
        'createResource': createResource
    }

    if fieldName in handlers:
        return handlers[fieldName](**arguments)

    raise Exception('Unknown field name: ' + fieldName)
