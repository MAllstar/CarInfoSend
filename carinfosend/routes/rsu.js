var express = require('express');
var router = express.Router();
var rsu = require('../public/javascript/conn.js')

router.get('/',  function(req, res,next){
  var pageNumber = 0;
  var pageNumber = req.query.pageNumber || 0;
  var pageNumberDel = parseInt(pageNumber) - 1;
  var pageNumberAdd = parseInt(pageNumber) + 1;
  res.render('generary/rsu',
  {
    title:"路测单元",
    pageNumber:pageNumber,
    pageNumberDel:pageNumberDel,
    pageNumberAdd:pageNumberAdd
  });
});

//写入数据库
router.get('/rsuDatabase',function(req, res,next){
  var newRsu = new rsu.rsu({
    loAndLa: req.query.loAndLa,
    carNum: 2,
    state: '运行中',
    group: req.query.group
    })
    newRsu.save(function(err, Person){
      console.log('添加成功')
    });
});
//获取数据库数据并返回前端
router.get('/getData',function(req, res,next){
    rsu.rsu.find(function(err, result){
      res.send(result);
    })
});
module.exports = router;
