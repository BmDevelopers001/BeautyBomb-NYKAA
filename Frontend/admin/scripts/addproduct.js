
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

document.querySelector("form").addEventListener("submit", async(e)=>{
    e.preventDefault()
    let name = document.querySelector("#name").value
    let qty = document.querySelector("#qty").value
    let price = document.querySelector("#price").value
    let category = document.querySelector("#category").value
    let gender = document.querySelector("#gender").value
    let description = document.querySelector("#description").value
    let image = document.querySelector("#image")
    
    const data = {
        name,
        price,
        qty,
        category,
        gender,
        description,
        image:[image.value]
    }
    console.log(data);

    try {
        const res = await fetch("http://localhost:8000/products/add", {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })

        const result = await res.json()
        if(result.msg == "Product added"){
            document.querySelector("form").reset()
            document.querySelector("#pass_msg_1").style.display = "block"
            document.querySelector("#pass_msg").innerHTML = result.msg
            passMsg()
        }else{
            document.querySelector("#fail_msg_2").style.display = "block"
            document.querySelector("#fail_msg").innerHTML = result.msg
            failMsg()
        }
    } catch (error) {
        console.log(error);
    }
})

function passMsg(){
    setTimeout(()=>{
        document.querySelector("#pass_msg_1").style.display = "none"
        // location.href = "seller.html"
    }, 2000)
}
function failMsg(){
    setTimeout(()=>{
        document.querySelector("#fail_msg_2").style.display = "none"
        // document.querySelector("#pass_msg").innerHTML = msg
    }, 3000)
}