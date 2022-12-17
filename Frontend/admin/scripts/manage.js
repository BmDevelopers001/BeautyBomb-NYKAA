const totalProducts = async()=>{
    try {
        let res = await fetch("http://localhost:8000/products")
        let result = await res.json()
        console.log(result);

        appendData(result.products)
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

        let dlt = document.createElement("button")
        dlt.classList.add("inline-block", "px-6", "py-2.5", "bg-red-600", "text-white", "font-medium", "text-xs", "leading-light", "uppercase", "rounded", "shadow-md", "hover:bg-red-700", "hover:shadow-lg", "focus:bg-red-700", "focus:shadow-lg", "focus:outline-none", "focus:ring-0", "active:bg-red-800", "active:shadow-lg", "transition", "duration-150","ease-in-out")
        dlt.innerHTML = "Delete"

        btnDiv.append(edit, dlt)

        card.append(imgDiv, about, btnDiv)

        document.querySelector("#manage").append(card)
    });
}