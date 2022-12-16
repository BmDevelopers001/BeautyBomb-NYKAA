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

let container = document.querySelector(".multiple_prod_box");

let cartData = async () => {
        await fetch("http://localhost:8000/cart" , {
            headers : {
                authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => res.json())
        .then((res) => {    
            cart(res)
        })
        .catch((err) => console.log(err))
}
cartData()

let arr = []

function cart(data){
    data.forEach(async function(el){
        // console.log(el.productId);
       try{
           let res = await fetch(`http://localhost:8000/products/productid/${el.productId}`)

           let final_data = await res.json()
            arr.push(final_data)
        //    console.log(final_data);
        // let c_data = await final_data.json()
        // console.log(c_data)
        //    arr.push(JSON.stringify(final_data))
       }
       catch(err){
        console.log(err);
       }
        // .then((res) => res.json())
        // .then((res) => {
        //     // arrPush(res)
        // })
        // .catch((err) => console.log(err))
    })
    
}

console.log(arr)

function append(data) {
    container.innerHTML = null
    data.forEach(function (prod) {
        console.log(prod.name);
    //     let cart_div = document.createElement("div");
    //     cart_div.setAttribute("class", "cart_div");

    //     let image = document.createElement("img");
    //     image.src = prod.image[0];
    //     image.setAttribute("class", "cart_image");

    //     let des = document.createElement("p");
    //     des.setAttribute("class", "description");
    //     des.innerText = prod.name;

    //     let price = document.createElement("p");
    //     price.innerText = prod.price;
    //     price.setAttribute("class", "cart_price");

    //     let icon = document.createElement("span");
    //     icon.setAttribute("class", "deleteicon")
    //     icon.innerHTML = `<i class="fa fa-trash-o" style="font-size:16px"></i>`
    //     icon.onclick = function () {
    //         deleteProduct(prod)
    //     }

    //     cart_div.append(image,des, icon, price)
    //     container.append(cart_div)
    });
}

// append(arr)




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

// let container = document.querySelector(".multiple_prod_box");
// appender(array)


// let decreaseQuantity=(i)=>{

// }
// let increaseQuantity=(i)=>{

// }