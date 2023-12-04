// index.d.ts
export type ConfigureType = {
  authId: string;
  authToken: string;
};

export type MessageContentType = {
  src: string;
  dst: string;
  text: string;
};

export type PlivoResponseType = {
  api_id: string;
  message: string;
  message_uuid: string[];
};

export declare const sendSms: (
  configuration: ConfigureType,
  messageContent: MessageContentType
) => PlivoResponseType;
