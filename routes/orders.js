var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
      msg: 'Orders were fetched!'
  })
});

router.post('/', function(req, res, next) {
    res.status(201).json({
        msg: 'Order was created!'
    })
});

router.get('/:orderId', function(req, res, next) {
    res.status(201).json({
        msg: 'Order details'
    })
});

router.delete('/:orderId', function(req, res, next) {
    res.status(201).json({
        msg: 'Order deleted',
        orderId: req.params.orderId
    })
});

module.exports = router;
