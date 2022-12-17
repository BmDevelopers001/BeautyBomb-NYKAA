const totalProducts = async()=>{
    try {
        let res = await fetch("http://localhost:8000/products")
        let result = await res.json()
        

        document.querySelector("#numberOfProducts").innerHTML = (result.products).length
    } catch (error) {
        console.log(error);
    }
}

totalProducts()