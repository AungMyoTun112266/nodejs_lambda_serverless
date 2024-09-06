import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

// Initialize AWS SDK and DynamoDB client without explicitly setting credentials
const dynamoDBClient = new DynamoDBClient({
  region: process.env.AWS_REGION || 'ap-southeast-1'
});

const dynamoDB = DynamoDBDocumentClient.from(dynamoDBClient);

export default dynamoDB;
