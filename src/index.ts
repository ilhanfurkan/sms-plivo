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

export const sendSms = async (
  configuration: ConfigureType,
  messageContent: MessageContentType
) => {
  const bodyData = {
    src: messageContent.src, // Company Name
    dst: messageContent.dst, // Number
    text: messageContent.text, // Message Content
  };

  return fetch(
    `https://api.plivo.com/v1/Account/${configuration.authId}/Message/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(
          `${configuration.authId}:${configuration.authToken}`
        ).toString("base64")}`,
      },
      body: JSON.stringify(bodyData),
    }
  )
    .then((response: any) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json() as unknown as PlivoResponseType;
    })
    .then((responseData: PlivoResponseType) => {
      console.log("Plivo API Response:", responseData);
      return responseData;
    })
    .catch((error: Error) => {
      console.error("Error:", error.message);
      throw error; // Re-throw the error to propagate it further if needed
    });
};

