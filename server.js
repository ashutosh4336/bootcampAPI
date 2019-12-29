const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

//load env variables
dotenv.config({ path: './config/config.env' });

//MongoDB Connection
const connectDB = require('./config/db');
connectDB();

//Load routes
const bootcamps = require('./routes/bootcamps');

const app = express();

//Dev loggin middlewware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5003;

const server = app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle Unhandled Rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  //Close server and Exit Process
  server.close(() => process.exit(1));
});
