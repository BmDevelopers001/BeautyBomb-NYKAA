document.querySelector("form").addEventListener("submit", async(e)=>{
    e.preventDefault()
    let name = document.querySelector("#name").value
    let qty = document.querySelector("#qty").value
    let price = document.querySelector("#price").value
    let category = document.querySelector("#category").value
    let gender = document.querySelector("#gender").value
    let description = document.querySelector("#description").value
    let image = document.querySelector("#image").value
    
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
        const res = await fetch("http://localhost:8000/products/add", {
            method: "POST",
            body: JSON.stringify(data),
            Headers:{
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })

        const result = await res.json()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})