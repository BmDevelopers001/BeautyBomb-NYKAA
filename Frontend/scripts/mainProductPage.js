let data={"_id":{"$oid":"6399f9479e275b9f1ad983ee"},"name":"Matrix Opti Care Smooth Straight Professional Shampoo with Shea Butter, Frizz-free Hair,Paraben Free","qty":"350ml","price":{"$numberInt":"560"},"category":"shampoo","gender":"unisex","image":["https://images-static.nykaa.com/media/catalog/product/6/7/67a1e6eNYMATRIX00109_aa1.jpg","https://images-static.nykaa.com/media/catalog/product/6/7/67a1e6eNYMATRIX00109_aa2.jpg","https://images-static.nykaa.com/media/catalog/product/6/7/67a1e6eNYMATRIX00109_aa3.jpg","https://images-static.nykaa.com/media/catalog/product/6/7/67a1e6eNYMATRIX00109_aa4.jpg"],"description":"Explore the entire range of Shampoo available on Nykaa. Shop more Matrix products here.You can browse through the complete world of Matrix Shampoo .  Expiry Date: 15 May 2025 Country of Origin:  India  Manufacturer:  Matrix Address:  A Wing ,8th Floor ,Marathon Futurex, NM Joshi Marg,Lower Parel Mumbai","rating":{"$numberInt":"3"},"sellerId":"6399c31872f8ebfaed821232","__v":{"$numberInt":"0"}}

// let something={"_id":{"$oid":"639aa4ba8e22468778a6292f"},"name":"Coco Soul Conditioner Hair + Scalp With Coconut & Ayurveda","qty":"200ml","price":{"$numberInt":"339"},"category":"conditionor","gender":"female","image":["https://images-static.nykaa.com/media/catalog/product/d/6/d614b738901088160551_1.jpg","https://images-static.nykaa.com/media/catalog/product/d/6/d614b738901088160551_2.jpg","https://images-static.nykaa.com/media/catalog/product/d/6/d614b738901088160551_3.jpg","https://images-static.nykaa.com/media/catalog/product/d/6/d614b738901088160551_4.jpg"],"description":"THE COCO SOUL STORY At the heart of Coco Soul is a belief that Mother Nature has the answers for all our concerns. So we bring to you nature-inspired products that are free from Sulphates , Parabens, Mineral Oils, Silicones or any other chemicals you don't want in your products. Created with the ancient wisdom of Ayurveda, Cocosoul has 100% organic virgin King Coconut oil in its core. Ayurvedic herbs and spices used for millennia have fortified our products. Experience Coco Soul and transform your bathing and skincare routines into sensorial luxuries.","rating":{"$numberInt":"2"},"sellerId":"6399c31872f8ebfaed821232","__v":{"$numberInt":"0"}}

localStorage.setItem("mainProduct",JSON.stringify(data))

let obj=JSON.parse(localStorage.getItem("mainProduct"))||[]


let {image,price,qty,description,name}=obj

console.log(image)
let productName=document.getElementById("productPage")
productName.innerText=name

    

let productQuantity=document.getElementById("qty")
productQuantity.innerText=qty

let productPrice=document.querySelector(".mrp")
productPrice.innerText=price.$numberInt

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
