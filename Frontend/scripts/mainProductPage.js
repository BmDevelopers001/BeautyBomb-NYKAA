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
  await addToCart(obj)
})
async function addToCart(prod){
  const productId =prod._id
  // console.log(productId)
  // const payload = {
  //   _id : productId
  // }

  try{
    let cart_data = await fetch(`http://localhost:8000/cart/productData/${productId}` , {
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
      await fetch("http://localhost:8000/cart/add", {
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