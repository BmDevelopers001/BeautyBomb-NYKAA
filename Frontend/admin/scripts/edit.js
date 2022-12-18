

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

let eid = localStorage.getItem("ProductID")
console.log(eid);
const getvalue = async(eid)=>{
    const res = await fetch(`http://localhost:8000/products/productid/${eid}`, {
        headers:{ 
           Authorization: `Beare ${localStorage.getItem("token")}`
        }
    })
    const result = await res.json()

    document.querySelector("#name").value = result.name
    document.querySelector("#qty").value = result.qty
    document.querySelector("#price").value = result.price
    document.querySelector("#category").value = result.category
    document.querySelector("#gender").value = result.gender
    document.querySelector("#description").value = result.description
    document.querySelector("#image").value = result.image
    console.log(result)
}

getvalue(eid)

document.querySelector("form").addEventListener("submit", async(e)=>{
    e.preventDefault()
    let name = document.querySelector("#name").value
    let qty = document.querySelector("#qty").value
    let price = document.querySelector("#price").value
    let category = document.querySelector("#category").value
    let gender = document.querySelector("#gender").value
    let description = document.querySelector("#description").value
    // let image = document.querySelector("#image").value
    
    const data = {
        name,
        price,
        qty,
        category,
        gender,
        description,
        image,
    }
    console.log(data);

    try {
        const res = await fetch(`http://localhost:8000/products/edit/${eid}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers:{
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })

        const result = await res.json()
        document.querySelector("#pass_msg_1").style.display = "block"
        document.querySelector("#pass_msg").innerHTML = result.msg
        passMsg()
        // console.log(result);
    } catch (error) {
        console.log(error);
    }
})


function passMsg(){
    setTimeout(()=>{
        document.querySelector("#pass_msg_1").style.display = "none"
        location.href = "manageproduct.html"
    }, 3000)
}