const axios = require("axios");
// const FormData = require("form-data");

const auth = async () => {
  let urlencoded = new URLSearchParams();

  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_id", process.env.client_id);
  urlencoded.append("client_secret", process.env.client_secret);

  // let headers = {
  //   "Content-Type": "application/x-www-form-urlencoded",
  // };
  // let body = {
  //   grant_type: "client_credentials",
  //   client_id: process.env.client_id,
  //   client_secret: process.env.client_secret,
  // };
  // const CLIENT_ID = process.env.client_id;
  // const CLIENT_SECRET = process.env.client_secret;
  // let form = new FormData();
  // form.append("grant_type", "client_credentials");
  // form.append("client_id", process.env.client_id);
  // form.append("client_secret", process.env.client_secret);

  const uriAuth = "https://test.api.amadeus.com/v1/security/oauth2/token";

  // const bodyFull = `grant_type=client_credentials&client_id=${body.client_id}&client_secret=${body.client_secret}`;

  // form.append(
  //   "data",
  //   `{
  //   grant_type: "client_credentials"
  // }`
  // );
  // form.append(
  //   "auth",
  //   `{
  //   client_id: ${process.env.client_id},
  //   client_secret: ${process.env.client_secret},
  // }`
  // );

  console.log(`Este es el pss: ${urlencoded}`);

  let response = await axios.post(uriAuth, urlencoded).then((res) => {
    return res.data;
  });
  return response;
};

module.exports = { auth };
