import 'source-map-support/register';

const logMessage = async (): Promise<string> => {
  const message = `Hello Adrien, welcome to the exciting Serverless world!`;
  // @ts-expect-error aze
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log(message.qsd.er);

  return Promise.resolve(message);
};

export const main = logMessage;
