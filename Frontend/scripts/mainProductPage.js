let obj=JSON.parse(localStorage.getItem("mainProduct"))||[]


let {image,price,qty,description,name,_id}=obj

console.log(image)
let productName=document.getElementById("productPage")
productName.innerText=name

let productQuantity=document.getElementById("qty")
productQuantity.innerText=qty

let productPrice=document.querySelector(".mrp")
productPrice.innerText=price

let productDescription=document.getElementById("productmaindescription")
productDescription.innerText=description

let cart_btn = document.getElementById("cart_btn");
cart_btn.onclick = () => {
    console.log("check");
    window.location.href = "../view/cart.html"
}


async function getUsername(){
  // location.reload()
  // const username  = document.getElementById("usernamechange").innerText;
  const token = localStorage.getItem("token")
  if(token!=null){

      try {
          const url = "https://sore-rose-catfish-hose.cyclic.app/user"
          const res = await fetch(url,{
              headers:{
                  'Content-type':'application/json',
                  Authorization:`Bearer ${localStorage.getItem("token")}`
              }
          })
          const data = await res.json();
          console.log(data.user[0].username)
          document.getElementById("usernamechange").innerText = "Welcome,"+data.user[0].username;
      } catch (error) {
          console.log(error)
      }
  }
  else{
      // location.reload()
  }
}
getUsername();



const showModal=()=>{
 document.getElementById("loader").style.display="block"
 setTimeout(()=>{
  document.getElementById("loader").style.display="none"
 document.getElementById("timeChecker").style.display="block"
 },2000) 

}

// lets nqtyeusabality
var splide = new Splide( '.splide', {
  perPage : 3,
  // easing:cubic-bezier(0.25, 1, 0.5, 1),
  drag:"free",
  cover   : true,
  height  : '15rem',
  gap:"2em",
  width:"100em",
  lazyLoad: "nearby",
  rewind: true,
  breakpoints: {
    height: '6rem',
  },
} );

splide.mount();











let slideIndex = 1;


let imagesOfcarousel = document.getElementsByClassName("demo cursor");
let imagesOfcarouselMain = document.getElementsByClassName("mainimage");
console.log(imagesOfcarousel[0]);
for (let i = 0; i < image.length; i++) {
  imagesOfcarousel[i].src = image[i];
  imagesOfcarouselMain[i].src = image[i];
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



//addbagger


document.getElementById("addbagger").addEventListener("click",async()=>{
  console.log("clicked")
  alert("product added to cart successfully")
  await addToCart(obj)
})
async function addToCart(prod){
  const productId =prod._id
  // console.log(productId)
  // const payload = {
  //   _id : productId
  // }

  try{
    let cart_data = await fetch(`https://sore-rose-catfish-hose.cyclic.app/cart/productData/${productId}` , {
      headers : {
        "authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
    let finalData = await cart_data.json()
    const payload = {
      productDetails : finalData
    }
    // console.log(payload)
    try {
      await fetch("https://sore-rose-catfish-hose.cyclic.app/cart/add", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
    }
    catch (err) {
      console.log(err);
    }
  }
  catch(err){
    console.log(err);
  }

}