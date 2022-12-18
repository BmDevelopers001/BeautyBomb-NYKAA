const image= [
    "https://images-static.nykaa.com/media/catalog/product/8/e/8e0c7e3TRESE00000040_1.jpg?tr=w-344,h-344,cm-pad_resize",
    "https://images-static.nykaa.com/media/catalog/product/8/e/8e0c7e3TRESE00000040_4.jpg?tr=w-344,h-344,cm-pad_resize",
    "https://images-static.nykaa.com/media/catalog/product/8/e/8e0c7e3TRESE00000040_5.jpg?tr=w-344,h-344,cm-pad_resize",
    "https://images-static.nykaa.com/media/catalog/product/8/e/8e0c7e3TRESE00000040_6.jpg?tr=w-344,h-344,cm-pad_resize",
    "https://images-static.nykaa.com/media/catalog/product/8/e/8e0c7e3TRESE00000040_7.jpg?tr=w-344,h-344,cm-pad_resize",
  ]
let row=document.querySelector(".row")
let div=document.createElement("div")
div.setAttribute("class","column")
        let image$ = document.createElement("img");
        image$.setAttribute("class","demo cursor")
        image$.style.width="50%"
        image$.addEventListener("click",currentSlide(1))
        image$.src = image[0];
        div.append(image$) 
row.append(div)



let div1=document.createElement("div")
div1.setAttribute("class","column")
        let image1 = document.createElement("img");
        image1.setAttribute("class","demo cursor")
        image1.style.width="50%"
        image1.addEventListener("click",currentSlide(2))
        image1.src = image[1];
        div1.append(image1) 
row.append(div1)


let div2=document.createElement("div")
div2.setAttribute("class","column")
        let image2 = document.createElement("img");
        image2.setAttribute("class","demo cursor")
        image2.style.width="50%"
        image2.addEventListener("click",currentSlide(3))
        image2.src = image[2];
        div2.append(image2) 
row.append(div2)




let div3=document.createElement("div")
div3.setAttribute("class","column")
        let image3 = document.createElement("img");
        image3.setAttribute("class","demo cursor")
        image3.style.width="50%"
        image3.addEventListener("click",currentSlide(4))
        image3.src = image[3];
        div3.append(image3) 
row.append(div3)