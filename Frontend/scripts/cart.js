let array=JSON.parse(localStorage.getItem("NykaaCart"))||[]
console.log(array)
// step 1 is to make a get request so that we can fetch the data
let cart__icon = document.querySelector(".cart--icon")

cart__icon.addEventListener("click" , ShowShoppingBag)

let shoppingBag = document.querySelector(".Shopping-bag-box")
let chat_ty = document.querySelector(".chatbox")
let arrowto_UP = document.querySelector(".arrow") 
function ShowShoppingBag() {
    shoppingBag.style.display = "block"
    chat_ty.style.display = "none"
    arrowto_UP.style.display = "none"
}

let shoppingBackBtn = document.querySelector(".shoppingback-btn")

shoppingBackBtn.addEventListener("click" , HideShoppingBag)

function HideShoppingBag() {
    shoppingBag.style.display = "none"
    chat_ty.style.display = "block"
    arrowto_UP.style.display = "block"
}

// get data from server 

let container = document.querySelector(".multiple_prod_box");
appender(array)
function appender(data){
container.innerHTML=null
data.forEach(prod => {
    let cart_div=document.createElement("div");
    cart_div.setAttribute("class","cart_div")
    let image=document.createElement("img")
    image.src=prod.image;
    image.setAttribute("class","cart_image")
    let des=document.createElement("p")
    des.setAttribute("class","description");
    des.innerText=prod.name;
    let price=document.createElement("p")
    price.innerText=prod.price
    price.setAttribute("class","cart_price")
    let icon=document.createElement("span");
    icon.setAttribute("class","deleteicon")
    icon.innerHTML=`<i class="fa fa-trash-o" style="font-size:16px"></i>`
    icon.onclick=function(){
       deleteProduct(prod) 
}


cart_div.append(image,des,icon, price)
container.append(cart_div)
});

}

let decreaseQuantity=(i)=>{

}
let increaseQuantity=(i)=>{

}