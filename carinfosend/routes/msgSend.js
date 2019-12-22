var express = require('express');
var router = express.Router();

router.get('/',  function(req, res,next){
    res.render('generary/msgSend',{title:"信息分发"});
  });

module.exports = router;
