"use strict";
const config = {
  port: process.env.port || 3000,
  address: false ? '127.0.0.1' : '0.0.0.0'
}

export default config;

