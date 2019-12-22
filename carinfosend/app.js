var express = require('express');
var hbs = require('express-handlebars')
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true })); 

//各个路由
app.use('/', require('./routes/index'));
app.use('/login', require('./routes/login'));
app.use('/regist', require('./routes/regist'));
app.use('/sendMail', require('./routes/sendMail'));
app.use('/reGetPsd', require('./routes/reGetPsd'));
app.use('/dataStatistics', require('./routes/dataStatistics'));
app.use('/rsu', require('./routes/rsu'));
app.use('/carMeneger', require('./routes/carMeneger'));
app.use('/msgSend', require('./routes/msgSend'));


//静态资源目录
app.use(express.static(path.join(__dirname, 'public')));

//绑定模板路径
app.set('views', path.join(__dirname, 'views'));
//设置模板引擎
app.set('view engine', 'hbs');
//模板引擎配置
app.engine('.hbs', hbs ({
    extname: '.hbs',
    defaultLayout: 'default',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
  }));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {layout: false, status: 500});   //取消自动加载的默认布局模板
});

app.listen(3001);
