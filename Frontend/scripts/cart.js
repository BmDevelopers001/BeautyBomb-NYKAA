// let data = [{
//     name: "Arata Hair Styling and Shaping Gel with Organic Flaxseed Extracts",
//     image: "https://images-static.nykaa.com/media/catalog/product/f/a/face-primer.jpg",
//     price : 849
// },
// {
//     name: "Parachute Advansed Coconut Water Hydrating Multipurpose Gel For Skin & Hair",
//     image: "https://images-static.nykaa.com/media/catalog/product/8/9/8904245706623_02.jpg",
//     price : 119
// }
// ]

// import { navbar } from "../component/navbar.js"
// let nav = document.getElementById("navbar")
// nav.innerHTML = navbar()

// import { FOOTER } from "../component/pagefooter.js"
// let footerpage = document.querySelector("footer")
// footerpage.innerHTML = FOOTER()

let cart_div = document.getElementById("cart_div")
let total_price = document.getElementById("Toatlrupee");
let cal_total = document.getElementById("cal_total");
let discount = document.getElementById("discount");
let dis_inp = document.getElementById("dis_inp");

let coupen_apply = document.getElementById("coupen_apply");
coupen_apply.onclick = () => {
    
    if (dis_inp.value == "BB20"){
        discount.innerText = `- ${Math.ceil(total * 20/100) }`
        total_price.innerText = `₹ ${total - Math.ceil(total * 20 / 100) }`
        alert("Hurry! Coupen applied succsessfully")
    } else{
        alert("Invalid Coupen!")
    }

}

let cartData = async () => {
        await fetch("http://localhost:8000/cart" , {
            headers : {
                authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => res.json())
        .then((res) => {    
            append(res)
        })
        .catch((err) => console.log(err))
}
cartData()

function append(data) {
    cart_div.innerHTML = null
    data.forEach(function (prod) {
        let el = prod.productDetails
        // console.log(el.image[0]);
        let cart_product = document.createElement("div");
        cart_product.setAttribute("id", "cart_product");

        let img_div = document.createElement("div")
        img_div.setAttribute("id" , "img_div")
        let image = document.createElement("img");
        image.src = el.image[0];

        let details = document.createElement("div");
        details.setAttribute("id" , "details");

        let title_div = document.createElement("div");
        title_div.setAttribute("id" , "title_div")

        let des = document.createElement("p");
        des.setAttribute("class", "description");
        des.innerText = el.name;

        let para_div = document.createElement("div");
        para_div.setAttribute("id" , "para_div")

        let price = document.createElement("p");
        price.innerText = `₹ ${el.price}`;
        price.setAttribute("id", "item_price");
        priceIn(el.price)

        let qty_div = document.createElement("div");
        qty_div.setAttribute("id" , "qty_div")
            let qty_box = document.createElement("p");
            qty_box.setAttribute("id" , "qtyVal")
            qty_box.innerText = "Qty : 1"
            // qty_box.type = Number;
            let qtyAdd = document.createElement("button");
            qtyAdd.innerText = "+";
            qtyAdd.onclick = () => {
                incQty(price , el.price, qty_box , qtyAdd, qtyLess)
            }
            let qtyLess = document.createElement("button");
            qtyLess.innerText = "-";
            qtyLess.onclick = () => {
                decQty(price, el.price, qty_box, qtyAdd, qtyLess)
            }

        let icon = document.createElement("p");
        icon.setAttribute("id", "del_icon")
        icon.innerHTML = `<i class="fa fa-trash-o" style="font-size:16px"></i>`
        icon.onclick = function () {
            deleteProduct(prod)
            priceDe(el.price)
        }

        qty_div.append(qty_box,qtyAdd,qtyLess)
        img_div.append(image)
        details.append(title_div , para_div)
        title_div.append(des)
        para_div.append(price,qty_div,icon)
        cart_product.append(img_div, details)
        cart_div.append(cart_product)
    });
}

let total = 0

function priceIn(el){
    total = total + el;
    total_price.innerText = `₹ ${total}`
    cal_total.innerText = `₹ ${total}`
}

function priceDe(el) {
    total = total - el;
    total_price.innerText = `₹ ${total}`
    cal_total.innerText = `₹ ${total}`
}
let qty = 1

function incQty(price , pro_price, qty_box , qtyAdd , qtyLess){
    if(qty == 4){
        qtyAdd.disabled = true
    } else{
        qty++;
        qtyLess.disabled = false
        qty_box.innerText = `Qty : ${qty}`
        price.innerText = `₹ ${qty * pro_price}` 
        priceIn(pro_price)
        if (dis_inp.value == "BB20") {
            discount.innerText = `- ${Math.ceil(total * 20 / 100)}`
            total_price.innerText = `₹ ${total - Math.ceil(total * 20 / 100)}`
        }
    }
}

function decQty(price, pro_price, qty_box, qtyAdd, qtyLess) {
    if (qty == 1) {
        qtyLess.disabled = true
    } else {
        qty--;
        qtyAdd.disabled = false
        qty_box.innerText = `Qty : ${qty}`
        price.innerText = `₹ ${qty * pro_price}` 
        priceDe(pro_price)
        if (dis_inp.value == "BB20") {
            discount.innerText = `- ${Math.ceil(total * 20 / 100)}`
            total_price.innerText = `₹ ${total - Math.ceil(total * 20 / 100)}`
        }
    }
}

async function deleteProduct(prod){
    try{
        await fetch(`http://localhost:8000/cart/delete/${prod._id}` , {
            method : "DELETE",
            headers : {
                authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
    }
    catch(err){
        console.log(err);
    }
    location.reload()
    // cartData()
}








// let arr = []

// function cart(data){
//     data.forEach(async function(el){
//         // console.log(el.productId);
//        try{
//            let res = await fetch(`http://localhost:8000/products/productid/${el.productId}`)

//            let final_data = await res.json()
//             arr.push(final_data)
//         //    console.log(final_data);
//         // let c_data = await final_data.json()
//         // console.log(c_data)
//         //    arr.push(JSON.stringify(final_data))
//        }
//        catch(err){
//         console.log(err);
//        }
//         // .then((res) => res.json())
//         // .then((res) => {
//         //     // arrPush(res)
//         // })
//         // .catch((err) => console.log(err))
//     })
    
// }

// console.log(arr)

// let array=JSON.parse(localStorage.getItem("NykaaCart"))||[]
// console.log(array)
// // step 1 is to make a get request so that we can fetch the data
// let cart__icon = document.querySelector(".cart--icon")

// cart__icon.addEventListener("click" , ShowShoppingBag)

// let shoppingBag = document.querySelector(".Shopping-bag-box")
// let chat_ty = document.querySelector(".chatbox")
// let arrowto_UP = document.querySelector(".arrow") 
// function ShowShoppingBag() {
//     shoppingBag.style.display = "block"
//     chat_ty.style.display = "none"
//     arrowto_UP.style.display = "none"
// }

// let shoppingBackBtn = document.querySelector(".shoppingback-btn")

// shoppingBackBtn.addEventListener("click" , HideShoppingBag)

// function HideShoppingBag() {
//     shoppingBag.style.display = "none"
//     chat_ty.style.display = "block"
//     arrowto_UP.style.display = "block"
// }

// // get data from server 

// let cart_div = document.querySelector(".multiple_prod_box");
// appender(array)


// let decreaseQuantity=(i)=>{

// }
// let increaseQuantity=(i)=>{

// }




// let qty = document.createElement("h4");
        // qty.innerText = "Qty"
        // let qty_box = document.createElement("select")
        // qty_box.onchange = () => {
        //     priceIn(+(qty_box.value))
        // }

        //     let q1 = document.createElement("option")
        //     q1.textContent = 1
        //     q1.value = 0

        //     let q2 = document.createElement("option")
        //     q2.textContent = 2
        //     q2.value = 1 * el.price

        //     let q3 = document.createElement("option")
        //     q3.textContent = 3
        //     q3.value = 2 * el.price

        //     let q4 = document.createElement("option")
        //     q4.textContent = 4
        //     q4.value = 3 * el.price

        //     let q5 = document.createElement("option")
        //     q5.textContent = 5
        //     q5.value = 4 * el.price