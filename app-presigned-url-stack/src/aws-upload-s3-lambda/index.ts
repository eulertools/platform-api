import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from 'uuid';

const ddbClient = new DynamoDBClient({ region: process.env.AWS_REGION });
const S3 = new S3Client({});

export async function handler(event: APIGatewayProxyEventV2, context: any, callback: any) {
  const response = {
    isBase64Encoded: false,
    statusCode: 200,
    body: JSON.stringify({ message: "Successfully generated presigned url to upload file in S3" }),
  };

  try {
    const fileId = uuidv4();    
    const { userId } = event.queryStringParameters!;    
    const key = `${userId}/images/${fileId}`;
    const base64File = event.body!;
    const decodedFile = Buffer.from(base64File.replace(/^data:image\/\w+;base64,/, ""), "base64");

    const signedUrl = await getSignedUrl(S3, new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: key,
        Body: decodedFile,
        ContentType: "image/jpeg",
      }), { expiresIn: 60 * 60 * 24 });
    
    try {
      await ddbClient.send(new PutItemCommand({
          TableName: process.env.ENTITY_TABLE,
          Item: {
            identifier: { S: key },
          },
        })
      );
    } catch (err) {
      console.log({message: "Error occured while inserting into dynamodb: ", error: JSON.stringify(err)});
    }
    response.body = JSON.stringify({message: "Successfully generated presigned url to upload file in S3", signedUrl});
  } catch (e) {
    console.error(e);
    response.body = JSON.stringify({message: "Failed to generated presigned url to upload", errorMessage: e});
    response.statusCode = 400;
  }

  return response;
}
