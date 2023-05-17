const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const xss = require('xss-clean');

const usersRouter = require("./routes/users.routes")
const petsRouter = require("./routes/pets.routes")

const app = express();

const limiter = rateLimit({
  max: 10000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP. Please try again in one hour',
});

app.use(helmet());
app.use(express.json());
app.use(hpp());
app.use(xss());
app.use(cors());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('api/v1', limiter);

app.use("/api/v1/users", usersRouter)
app.use("/api/v1/pets", petsRouter)

module.exports = app;
