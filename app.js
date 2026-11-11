require('dotenv').config();


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mydataRouter = require('./routes/mydata');
var computationRouter = require('./routes/computation');
var gameRouter = require('./routes/game');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');
var Mydata = require('./models/mydata');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mydata', mydataRouter);
app.use('/resource', resourceRouter);
app.use('/computation', computationRouter);
app.use('/game', gameRouter);
app.use('/grid', gridRouter);
app.use('/selector', pickRouter);

// Connect to MongoDB Atlas. Set MONGODB_URI in Render Environment and local .env.
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(async function () {
      console.log('Connected to MongoDB Atlas');
      // Add the three starter records once, so the Show All page has data.
      const count = await Mydata.countDocuments();
      if (count === 0) {
        await Mydata.insertMany([
          { name: 'Keanu Reeves', category: 'Favorite Actor', description: 'I admire his acting and humility.' },
          { name: 'Web Development', category: 'Technology', description: 'I enjoy building web applications.' },
          { name: 'MongoDB Atlas', category: 'Database', description: 'I am learning to store and retrieve data with MongoDB.' }
        ]);
        console.log('Inserted three starter records');
      }
    })
    .catch(function (err) {
      console.error('MongoDB connection error:', err.message);
    });
} else {
  console.warn('MONGODB_URI is not set. Add it to your .env file or Render environment variables.');
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
