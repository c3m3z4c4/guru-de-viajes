const axios = require("axios");
const FormData = require("form-data");

const auth = async () => {
  // let form = new FormData();
  // form.append("grant_type", "client_credentials");
  // form.append("client_id", process.env.client_id);
  // form.append("client_secret", process.env.client_secret);

  // form.append(
  //   "form",
  //   `{
  //   grant_type: "client_credentials",
  //   client_id: ${process.env.client_id},
  //   client_secret: ${process.env.client_secret},
  // }`
  // );

  let response = await axios
    .post(
      `https://test.api.amadeus.com/v1/security/oauth2/token?grant_type="client_credentials"&client_id=${process.env.client_id}&client_secret=${process.env.client_secret}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      return res.data;
    });
  return response;
};

module.exports = { auth };
