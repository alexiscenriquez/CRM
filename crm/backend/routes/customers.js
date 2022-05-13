
const customerModel = require('../model/customer')
const express = require('express');
const  router = express.Router()

router.post('/add-customer',(req,res,next)=>{
    customerModel.create(req.body,(err,data)=>{
        if(err) {
            console.log(err)
            return next(err)
        }
        else {
            console.log(data)
            res.send('New customer added')
        }
    })
})

router.get('/all', (req, res, next) => {
  customerModel.find({}, (err, data) => {
    if (err){
console.log(err)
    return next(err)
    }
    else res.json(data)
  })
})

router.get('/find/:cid', (req, res, next )=> {
  customerModel.find({cid: parseInt(req.params.cid)}, (err, data) => {
    if (err) return next(err)
    else res.json(data)
  })
}
)

router.put('/update/:cid', (req, res) => {
  customerModel.updateOne({cid: parseInt(req.params.cid)},
    {
      $set: req.body
    }, (err, data) => {
      if (err){console.log("nope")
          return next(err)
    }
      else {
        res.send('customer information updated.')
        console.log('customer information updated.')
      }
    }
  )
})
router.delete('/delete/:cid', (req, res, next )=> {
  customerModel.deleteOne({cid: parseInt(req.params.cid)}, (err) => {
    if (err) return next(err)
    else {
      res.send('Client deleted from database')
      console.log('Client deleted from database')
    }
  })
})
router.post('/add-customer/:cid',(req,res,body)=>{
    customerModel.create(req.body,(err,data)=>{
        if(err) return next(err)
        else {
            console.log(data)
            res.send('New customer added')
        }
    })
})

module.exports=router;