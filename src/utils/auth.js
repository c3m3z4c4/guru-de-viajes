const axios = require("axios");

const auth = async () => {
  let urlencoded = new URLSearchParams();

  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_id", process.env.client_id);
  urlencoded.append("client_secret", process.env.client_secret);

  const uriAuth = "https://test.api.amadeus.com/v1/security/oauth2/token";

  console.log(`Este es el pss: ${urlencoded}`);

  let response = await axios.post(uriAuth, urlencoded).then((res) => {
    return res.data;
  });
  return response;
};

module.exports = { auth };
