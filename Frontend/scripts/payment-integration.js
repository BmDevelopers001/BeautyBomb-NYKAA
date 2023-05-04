import { URL } from "../component/url.js";

// so i want the quantity of each product in cart and obviosly there id to identity and get them
let cartData = async () => {
    try {
      let res = await fetch(`${URL}cart` , {
            headers : {
                authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
        let data=await res.json()
     productInformation(data);
    } catch (error) {
      console.log(error)
    }

}
cartData()
//  productDetails : Object,
//userID : String
// we need user id of all the products that we want to buy
// second thing is quantity
// assuming we are getting an array from db
//el 9340824 el ---> akjdajld ---
// const data = [
//   {
//     _id: { $oid: "639d4ef32a5d781e8c98c71e" },
//     productDetails: {
//       _id: { $oid: "6399cbfd03192c2a1b5df34d" },
//       name: "TRESemme Pro Pure Damage Recovery Shampoo with Fermented Rice Water Paraben & Sulphate Free",
//       qty: "390ml",
//       price: { $numberInt: "350" },
//       category: "shampoo",
//       gender: "unisex",
//       image: [
//         "https://images-static.nykaa.com/media/catalog/product/8/e/8e0c7e3TRESE00000040_1.jpg?tr=w-344,h-344,cm-pad_resize",
//         "https://images-static.nykaa.com/media/catalog/product/8/e/8e0c7e3TRESE00000040_4.jpg?tr=w-344,h-344,cm-pad_resize",
//         "https://images-static.nykaa.com/media/catalog/product/8/e/8e0c7e3TRESE00000040_5.jpg?tr=w-344,h-344,cm-pad_resize",
//         "https://images-static.nykaa.com/media/catalog/product/8/e/8e0c7e3TRESE00000040_6.jpg?tr=w-344,h-344,cm-pad_resize",
//         "https://images-static.nykaa.com/media/catalog/product/8/e/8e0c7e3TRESE00000040_7.jpg?tr=w-344,h-344,cm-pad_resize",
//       ],
//       description:
//         "TRESemme presents a Sulfate-free shampoo that deeply nourishes, repairs and protects damaged, dull hair.This professional hair care product provides maximum keratin protection thanks to the 'NuTREE complex', with natural tree extracts. Wella's first “free of” shampoo renews the moisture of the hair, preserving and nourishing it from root to tip.",
//       rating: { $numberDouble: "4.2" },
//       sellerId: "6399c31872f8ebfaed821232",
//       __v: { $numberInt: "0" },
//     },
//     userID: "639c1f0ca46bf04a3d433263",
//     __v: { $numberInt: "0" },
//   },
// ];

let array = [];
const productInformation = (arr) => {
  arr.forEach((el) => {
    
    let prodObj = { _id: el.productDetails._id, quantity: 1 };

    array.push(prodObj);
  });
};

console.log(array);


document.getElementById("proceed").addEventListener("click", ()=>{
    fetch(`${URL}create-checkout-session`,{
    method:"POST",
    body:JSON.stringify(array),
    headers:{
        "Content-Type":"application/json"
    }
    }).then((res)=> res.json())
    .then((res) => {
      window.location.href = res.url
    })
    .catch((err)=>{
        console.log(err)
    })
    })
    

