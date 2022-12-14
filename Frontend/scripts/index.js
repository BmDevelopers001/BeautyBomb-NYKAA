

import {navbar} from "../component/navbar.js"

let nav = document.getElementById("navbar")
nav.innerHTML = navbar()

import {FOOTER} from "../component/pagefooter.js"


let footerpage = document.querySelector("footer")
footerpage.innerHTML = FOOTER()



//nykaa dhamaka
let nykaa_dhamaka = document.getElementById("nykaa-dhamaka")
let flag = true

setInterval(() => {

    if(flag == true){
        nykaa_dhamaka.style.opacity = "0"
        flag = false
    }else {
        nykaa_dhamaka.style.opacity = "1"
        flag = true
    }
},2500)

//nykaa dhamaka end

//brand section navbar

let BRAND = document.querySelector(".show-brandbox")
BRAND.addEventListener("mouseover" , ShowBrandBox)
BRAND.addEventListener("mouseleave" , HideBOxes1)

let brand_box = document.querySelector(".brand-box")
brand_box.addEventListener("mouseleave" , HideBrandBox)

function ShowBrandBox() {
    brand_box.style.display = "grid"
    
let mainnykaa_fahsionBox = document.querySelector(".nykaa-fahsionBox")
mainnykaa_fahsionBox.style.display = "none"

    
let beauty_advice_box = document.querySelector(".beauty-advice-box")
beauty_advice_box.style.display = "none"

}
function HideBrandBox() {
    brand_box.style.display = "none"
}

function HideBOxes1() {

}

let popular_btn = document.querySelector(".popular-btn")
popular_btn.addEventListener("mouseover" , showPopularBrand)

let brand_popular_img = document.querySelector(".brand-imagesherepopular")
let brand_featured_img = document.querySelector(".brand-imageshereFeatured")

function showPopularBrand() {
    brand_popular_img.style.display = "grid"
    brand_featured_img.style.display = "none"
}

let featured_btn = document.querySelector(".Featured-btn")
featured_btn.addEventListener("mouseover" , ShowFeaturedimg)

function ShowFeaturedimg() {
    brand_popular_img.style.display = "none"
    brand_featured_img.style.display = "grid"
}

let onlyat_btn = document.querySelector(".onlynykaa")
onlyat_btn.addEventListener("mouseover" , showPopularBrand)

let new_launches = document.querySelector(".newlaunches")
new_launches.addEventListener("mouseover" , ShowFeaturedimg)


//brand section navbar end


// nykaa fashion section navbar
let mainnykaa_fahsionBox = document.querySelector(".nykaa-fahsionBox")

mainnykaa_fahsionBox.addEventListener("mouseleave" , HideNykaaFashionBox)

let show_nykaa_fashionBox = document.querySelector(".show-nykaa_fashionBox")
show_nykaa_fashionBox.addEventListener("mouseover" , Show_Nykaa_Fashion_Box)

function Show_Nykaa_Fashion_Box() {
    mainnykaa_fahsionBox.style.display = "block"
    let brand_box = document.querySelector(".brand-box")
    brand_box.style.display = "none"

    let beauty_advice_box = document.querySelector(".beauty-advice-box")
    beauty_advice_box.style.display = "none"
}

function HideNykaaFashionBox() {
    mainnykaa_fahsionBox.style.display = "none"
}


let Lingerie_more = document.querySelector(".Lingerie-and-more")
Lingerie_more.addEventListener("mouseover" , ShowLingerie)


let Nykaa_Fashion = document.querySelector(".Nykaa-Fashion")
Nykaa_Fashion.addEventListener("mouseover" , ShowNykaaFashionBox)

let Clothing_more = document.querySelector(".Clothing-and-more")
Clothing_more.addEventListener("mouseover" , ShowClothingBox)

let Bags_Footwear = document.querySelector(".Bags-and-Footwear")
Bags_Footwear.addEventListener("mouseover" , ShowBagsFootBox)

let Jewellery_acc = document.querySelector(".Jewellery-and-acc")
Jewellery_acc.addEventListener("mouseover" , ShowJewelleryBox)

let GadgetsTech_acc = document.querySelector(".Gedgets-and-Tech-acc")
GadgetsTech_acc.addEventListener("mouseover" , ShowGadgetTechBOx)



let Lingerie__box = document.querySelector(".Lingerie-box")

let nykaafashion__box = document.querySelector(".nykaa-fashion--box")

let clothing__box = document.querySelector(".clothing--box")

let bagfoot__box = document.querySelector(".bag-foot--box")

let Jewelleryacc__box = document.querySelector(".Jewellery-acc--box")

let gadgets__box = document.querySelector(".gadgets--box")


function ShowLingerie() {
    Lingerie__box.style.display = "grid"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "none"
}

function ShowNykaaFashionBox() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "grid"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "none"
}

function ShowClothingBox() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "grid"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "none"
}

function ShowBagsFootBox() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "grid"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "none"
}

function ShowJewelleryBox() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "grid"
    gadgets__box.style.display = "none"
}

function ShowGadgetTechBOx() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "grid"
}


// nykaa fashion section navbar end 1341

// nykaa beauty advice box navbar

let Show_nykaa_beautybox = document.querySelector(".Show-nykaa-beautybox")
Show_nykaa_beautybox.addEventListener("mouseover" , Shownykaabeautybox)

let beauty_advice_box = document.querySelector(".beauty-advice-box")
beauty_advice_box.addEventListener("mouseleave" , Hidebeautyadvicebox)

function Shownykaabeautybox() {
    beauty_advice_box.style.display = "flex"
    let brand_box = document.querySelector(".brand-box")
    brand_box.style.display = "none"
        
let mainnykaa_fahsionBox = document.querySelector(".nykaa-fahsionBox")
mainnykaa_fahsionBox.style.display = "none"
}
function Hidebeautyadvicebox() {
    beauty_advice_box.style.display = "none"
}


//shopping cart work

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
