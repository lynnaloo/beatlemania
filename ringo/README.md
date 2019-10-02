# Serverless Example - Microsoft Azure Functions - Node.js

A Serverless Framework Example for Microsoft Azure Functions

## Setup

- Setup [Microsoft Azure Functions](https://serverless.com/framework/docs/providers/azure)

### Setting up your Azure credentials

Once the `serverless-azure-functions` plugin is installed, it expects to find your Azure credentials via a set of well-known environment variables. These will be used to actually authenticate with your Azure account, so that the Serverless CLI can generate the neccessary Azure resources on your behalf when you request a deployment (see below).

The following environment variables must be set, with their respective values:

- *azureSubId* - ID of the Azure subscription you want to create your service within
- *azureServicePrincipalTenantId* - ID of the tenant that your service principal was created within
- *azureServicePrincipalClientId* - ID of the service principal you want to use to authenticate with Azure
- *azureServicePrincipalPassword* - Password of the service principal you want to use to autheticate with Azure

For details on how to create a service principal and/or acquire your Azure account's subscription/tenant ID, refer to the [Azure credentials](https://serverless.com/framework/docs/providers/azure/guide/credentials/) documentation.




