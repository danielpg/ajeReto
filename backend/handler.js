const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const dynamodb = DynamoDBDocumentClient.from(client);

const TABLE_NAME = "clientes";

exports.getAllClientes = async () => {
  try {
    const params = { TableName: TABLE_NAME };
    const data = await dynamodb.send(new ScanCommand(params));

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data.Items),
    };
  } catch (error) {
    console.error("Error scanning DynamoDB:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};