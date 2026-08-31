import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient({ region: process.env.AWS_REGION });
const S3 = new S3Client({});

export async function handler(event: APIGatewayProxyEventV2, context: any, callback: any) {
  if (!event.queryStringParameters) {
    return {
      statusCode: 400,
      body: "Bad request"
    };
  }

  const { key } = event.queryStringParameters;
  if (!key) {
    return {
      statusCode: 400,
      body: "Bad request"
    };
  }

  const signedUrl = await getSignedUrl(
    S3,
    new GetObjectCommand({ Bucket: process.env.BUCKET_NAME, Key: key }),
    { expiresIn: 60 * 5 }
  );

  try {
    await ddbClient.send(new PutItemCommand({
        TableName: process.env.ENTITY_TABLE,
        Item: {
          identifier: { S: key }
        }
      })
    );
  } catch (err) {
    console.log({message: "Error occured while inserting into dynamodb: ", error: JSON.stringify(err)});
  }

  return {
    statusCode: 200,
    body: `Presigned URL: ${signedUrl.toString()}`,
  };
}
