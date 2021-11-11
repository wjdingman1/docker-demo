const axios = require("axios");

const host = process.env.HOST || "localhost";
const port = process.env.POST || 3000;
const url = `http://${host}:${port}`;

const route = process.argv[2];

switch (route) {
  case "1":
    console.log(`Making request to ${url}/one`);
    axios.get(`${url}/one`).then((res) => {
      console.log(res.data);
    });
    break;

  case "2":
    console.log(`Making request to ${url}/two`);
    axios.get(`${url}/two`).then((res) => {
      console.log(res.data);
    });
    break;

  case "3":
    console.log(`Making request to ${url}/three`);
    axios.get(`${url}/three`).then((res) => {
      console.log(res.data);
    });
    break;
}
