import app from './app';
import serverless from 'serverless-http';

const handler = serverless(app);

export const lambdaHandler = async (event: any, context: any) => {
  return handler(event, context);
};
