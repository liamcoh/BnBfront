// config.js
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  host_name: process.env.REACT_APP_BACK
};