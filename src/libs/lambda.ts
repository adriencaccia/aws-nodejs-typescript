import middy from '@middy/core';
import middyJsonBodyParser from '@middy/http-json-body-parser';
import { Handler } from 'aws-lambda';

export const middyfy = <T, R>(handler: Handler<T, R>): middy.Middy<T, R> => {
  return middy(handler).use(middyJsonBodyParser());
};
