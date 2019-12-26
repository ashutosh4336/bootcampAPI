const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Load routes
const bootcamps = require('./routes/bootcamps');

//load env variables
dotenv.config({ path: './config/config.env' });

const app = express();

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5003;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
