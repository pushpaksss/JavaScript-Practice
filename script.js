const apiURL="https://fakestoreapi.com/products/";
const productContainer=document.getElementById("product-container");
const errorMessage=document.getElementById("error-message");
fetch(apiURL)
.then(function(response){
    if(!response.ok){
        throw new Error("Failed to fetch products");
    }
    return response.json();
})
.then(function(products){
    products.forEach(function(product){
        const card=document.createElement("div");
        card.classList.add("product-card");
        const image=document.createElement("img");
        image.classList.add("product-image");
        image.src=product.image;
        image.alt=product.title;
        image.onerror=function(){
            this.style.display="none";
        };
        const title=document.createElement("h2");
        title.textContent=product.title.slice(0,60);
        const category=document.createElement("p");
        category.classList.add("product-category");
        category.textContent=product.category;
        const description=document.createElement("p");
        description.classList.add("product-description");
        description.textContent=product.description.slice(0,120);
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(description);
        productContainer.appendChild(card);
    });
})
.card(function(error){
    errorMessage.textContent="Error:Unable to load products.please try again.";
    console.error(error);
})
.finally(function(){
    console.log("API called");
});