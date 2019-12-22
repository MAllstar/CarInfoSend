var express = require('express');
var router = express.Router();

router.get('/',  function(req, res,next){
    res.render('generary/carMeneger',{title:"车辆管理"});
  });

module.exports = router;
