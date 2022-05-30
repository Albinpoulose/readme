var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const chatRouter = require('./routes/chat')

const cors = require('cors');
const connectDB  = require('./config/connection');

var app = express();
app.use(cors());  
connectDB(); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: "Key", resave: true, saveUninitialized: true, cookie: { maxAge: 60000 } }));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chat',chatRouter);
module.exports = app;
