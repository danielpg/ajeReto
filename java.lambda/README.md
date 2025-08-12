
## La ejecucion del Serverles crea:
Crea Java Lambda  
Crea Tabla Dynamodb  

# USE NODEJS 18.20.8

## Serverless Install
### `npm install serverless@3 --save-dev`

## Serverless Deploy

### `sls deploy`

## Cargar Datos en Tabla Clientes
aws dynamodb batch-write-item --request-items file://clientes-data.json  

