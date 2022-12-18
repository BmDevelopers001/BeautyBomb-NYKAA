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
let something;  
// STEP-1 IS TO FIND ALL THE ELEMENTS WHICH MATHCES
try {
    let query= await productModel.find({})
    let array$=req.body.map((item)=>{
for(let i=0;i<query.length;i++){
if(item._id==query[i]._id)

return query[i]
}
})
// for(let i=0;i<array$.length;i++){
// if(array$[i][quantity]==undefined){
//     console.log(array$)
//     array$[i][quantity]=req.body[i].quantity
// }

// }

let i=-1
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
success_url:"https://stripe.com/docs/testing#cards",
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