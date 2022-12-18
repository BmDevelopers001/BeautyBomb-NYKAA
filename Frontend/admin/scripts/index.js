
let slid = localStorage.getItem("sellerid")
let token = localStorage.getItem("token")
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
const totalProducts = async()=>{
    try {
        let res = await fetch(`http://localhost:8000/products/sellerpd/${slid}`, {
            
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        let result = await res.json()

        document.querySelector("#numberOfProducts").innerHTML = (result).length
    } catch (error) {
        console.log(error);
    }
}

totalProducts()