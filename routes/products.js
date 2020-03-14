var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
      msg: 'handling get request on /products'
  })
});

router.post('/', function(req, res, next) {
    res.status(200).json({
        msg: 'handling post request on /products'
    })
});

router.post('/:productId', function(req, res, next) {
      const id = req.params.productId;
      if(id === 'special') {
          res.status(200).json({
              msg: 'you discovered special id',
              ID: id
          })
      } else {
          res.status(200).json({
              msg: 'You passed and ID'
          })
      }
});

router.patch('/:productId', function(req, res, next) {
    res.status(200).json({
        msg: 'Successfully updated!'
    })
});

router.delete('/:productId', function(req, res, next) {
    res.status(200).json({
        msg: 'Successfully deleted!'
    })
});

module.exports = router;
