const handler = async (ev) => {
  if (ev.httpMethod !== 'POST') {
    return {statusCode: 405, body: 'Method Not Allowed'};
  }

  const body = JSON.stringify({
    expireCache: true,
    consentRequired: true,
    consentStateValue: 'accepted',
    consentString: 'example-string',
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': ev.headers?.origin || '',
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
    },
    body,
  };
};

module.exports = {handler};
