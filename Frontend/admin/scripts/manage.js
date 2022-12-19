
document.querySelector("#pass_msg_1").style.display = "none"
document.querySelector("#fail_msg_2").style.display = "none"
let seller = localStorage.getItem("seller")
if (seller) {
    document.querySelector("#seller").innerHTML = seller
} else {
    location.href = "adminlogin.html"
}

document.querySelector("#logout").addEventListener("click", ()=>{
    localStorage.removeItem("seller")
    location.reload()
})

let slid = localStorage.getItem("sellerid")
const totalProducts = async()=>{
    try {
        let res = await fetch(`http://localhost:8000/products/sellerpd/${slid}`, {
            
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("sltoken")}`
            }
        })
        let result = await res.json()
       
        document.querySelector(".loader").style.display = "none"
        appendData(result)
    } catch (error) {
        console.log(error);
    }
}
totalProducts()

const appendData = (data)=>{
    data.forEach((el)=> {
        let card = document.createElement("div")
        card.classList.add("card", "w-1/4", "border", "text-center", "shadow-md", "rounded-lg")

        let imgDiv = document.createElement("div")
        imgDiv.classList.add("h-56", "border-b", "pt-1", "pb-1")

        let img = document.createElement("img")
        img.classList.add("h-full", "w-full", "object-cover")
        img.src = el.image[0]

        imgDiv.append(img)

        let about = document.createElement("div")
        about.classList.add("p-2")

        let title = document.createElement("h1")
        title.classList.add("text-xl")
        title.innerHTML = el.name

        let price = document.createElement("p")
        price.innerHTML = `Price: ₹${el.price}`

        let category = document.createElement("p")
        category.innerHTML = `Category: ${el.category}`

        about.append(title, price, category)

        let btnDiv = document.createElement("div")
        btnDiv.classList.add("p-2", "pt-0", "flex", "justify-around")

        let edit = document.createElement("button")
        edit.classList.add("inline-block", "px-6", "py-2.5", "bg-gray-800", "text-white", "font-medium", "text-xs", "leading-light", "uppercase", "rounded", "shadow-md", "hover:bg-gray-900", "hover:shadow-lg", "focus:bg-gray-900", "focus:shadow-lg", "focus:outline-none", "focus:ring-0", "active:bg-gray-900", "active:shadow-lg", "transition", "duration-150","ease-in-out")
        edit.innerHTML = "edit"

        edit.addEventListener("click", ()=>{
            localStorage.setItem("ProductID", (el._id))
            location.href = "edit.html"
        })

        let dlt = document.createElement("button")
        dlt.classList.add("inline-block", "px-6", "py-2.5", "bg-red-600", "text-white", "font-medium", "text-xs", "leading-light", "uppercase", "rounded", "shadow-md", "hover:bg-red-700", "hover:shadow-lg", "focus:bg-red-700", "focus:shadow-lg", "focus:outline-none", "focus:ring-0", "active:bg-red-800", "active:shadow-lg", "transition", "duration-150","ease-in-out", "delete")
        dlt.innerHTML = "Delete"
        dlt.addEventListener("click", ()=>{
            deleteProduct(el._id)

        })
        btnDiv.append(edit, dlt)

        card.append(imgDiv, about, btnDiv)

        document.querySelector("#manage").append(card)
    });
}

let deleteProduct = async(id)=>{
    try {
        const response = await fetch(`http://localhost:8000/products/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("sltoken")}`
            }
        })
        const data = await response.json();
        if(data.msg == "Product Deleted successfully"){
            document.querySelector("#pass_msg_1").style.display = "block"
            document.querySelector("#pass_msg").innerHTML = data.msg
            passMsg()
        }else{
            document.querySelector("#fail_msg_2").style.display = "block"
            document.querySelector("#fail_msg").innerHTML = data.msg
            failMsg()
        }
    } catch (err) {
        console.log(err)
        
    }
}

function passMsg(){
    setTimeout(()=>{
        document.querySelector("#pass_msg_1").style.display = "none"
        location.reload()
    }, 2000)
}

function failMsg(){
    setTimeout(()=>{
        document.querySelector("#fail_msg_2").style.display = "none"
        // document.querySelector("#pass_msg").innerHTML = msg
    }, 3000)
}