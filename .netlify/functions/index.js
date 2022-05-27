const axios = require("axios");
require("dotenv").config();

exports.handler = async (event, context) => {
  const convert = event.queryStringParameters.convert;
  const options = {
    method: "GET",
    url: "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest",
    headers: {
      "X-CMC_PRO_API_KEY": process.env.REACT_APP_MARKET_CAP_KEY,
    },
    params: {
      slug: "tezos,thorchain,band-protocol,the-graph",
      convert,
    },
  };

  try {
    const response = await axios.request(options);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
