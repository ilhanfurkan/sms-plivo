# Plivo SMS Sender

This package provides a simple interface to send SMS messages using the Plivo API.

## Installation

Install the package via npm:

```
bash
npm install sms-plivo
```

## Configuration

Before using the package, obtain your Plivo API credentials (authId and authToken) from the Plivo dashboard. Configure the package by creating a configuration object:

```
const configuration = {
  authId: "your_auth_id",
  authToken: "your_auth_token",
};
```

## Message Content

Prepare the message content by creating a message object:

```
const messageContent = {
  src: "Your Company Name or Title",
  dst: "+90XXXXXXXXXX", // The destination number (including country code)
  text: "Your message content",
};
```

## Example Usage

Use the sendSms function to send an SMS:

```
const { sendSms } = require('sms-plivo');

sendSms(configuration, messageContent)
  .then((response) => {
    console.log('Plivo API Response:', response);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
```

Make sure to handle the promise returned by sendSms.

### Configuration Object

The configuration object requires the following properties:

- authId: Your Plivo API authentication ID.
- authToken: Your Plivo API authentication token.

### Message Object

The messageContent object requires the following properties:

- src: Your company name or title.
- dst: The destination number (including the country code).
- text: The content of your SMS message.

## Example

```
const configuration = {
authId: "your_auth_id",
authToken: "your_auth_token",
};

const messageContent = {
src: "Your Company",
dst: "+901234567890",
text: "Hello, this is a test message.",
};

sendSms(configuration, messageContent)
.then((response) => {
console.log('Plivo API Response:', response);
})
.catch((error) => {
console.error('Error:', error.message);
});
```

Feel free to customize the configuration and message content according to your needs.
