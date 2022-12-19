require("dotenv").config()
const express=require("express")
const stripe=require("stripe")(process.env.SECRET_KEY)
const domain=`http://localhost:${process.env.PORT}`
const paymentRouter=express.Router();
const cors=require("cors")
paymentRouter.use(cors({
    origin:"*"
}))

const productModel=require("../models/product.model");
const { response } = require("express");

paymentRouter.use(express.json())
paymentRouter.post("/",async(req,res)=>{
// console.log(req.body)
// console.log(req.body)

// STEP-1 IS TO FIND ALL THE ELEMENTS WHICH MATHCES
try {
    let query= await productModel.find({})
    // console.log(query)
    let array$=req.body.map((item)=>{
for(let i=0;i<query.length;i++){
if(item._id==query[i]._id)

return query[i]
}
})


let i=-1
console.log(array$,req.body)
let array=array$.map((item)=>{
while(i<req.body.length){
    i++
     
    return {
        price_data:{
        currency:"INR",
        product_data:{
         name:item.name 
        }
    ,
        unit_amount:item.price*100
        },
        quantity:+(req.body[i].quantity)
    }
}  
})
const session=await stripe.checkout.sessions.create({
payment_method_types:["card"],
mode:"payment",
line_items:array
,
    success_url:"https://peaceful-sherbet-34ffd8.netlify.app/",
cancel_url:"https://stripe.com/docs/testing#cards",
billing_address_collection:"required"
})    

res.send({"url":session.url})

} catch (error) {
    console.log(error)
res.status(500).json({error:error.message})
}
 

})
module.exports={paymentRouter}


// , get all the id;
// they will send me an array of object
// items:[{},{},{}]
// you have to query the mongo db each time 