const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//load env variables
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5003;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
