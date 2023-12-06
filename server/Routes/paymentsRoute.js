const router = require("express").Router();
let Payment = require('../models/paymentModel');

router.route("/addpayment").post((req,res)=>{

    
    const _id = Number(req.body.paycourseid);
    const paymentname = req.body.paycoursename;
    const paymentfee = req.body.paycoursefee;
    const paymentstatus = req.body.paycoursestatus;
    const paymentdate = req.body.paycoursedate;

    var pay = new Payment({
        _id,
        paymentname,
        paymentfee,
        paymentstatus,
        paymentdate,
    })
  console.log(pay);
    pay.save().then(()=>{ 

        
        let site =  pay.paymentname;
        console.log(site);
        res.json(site);
        res.status(200).json(site)

    }).catch((err)=>{
    console.log(err);
    })
});

module.exports = router;