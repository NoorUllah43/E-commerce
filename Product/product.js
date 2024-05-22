let productContainer = document.querySelector("#product_con");
let allBtn = document.querySelector("#AllBtn");
let smartphones = document.querySelector("#smartphones");
let laptops = document.querySelector("#laptops");
let skincare = document.querySelector("#skincare");
let groceries = document.querySelector("#groceries");
let homeDecoration = document.querySelector("#homeDecoration");
let Clothing = document.querySelector("#Clothing");
let closeBtn = document.querySelector(".close-btn")
let notification = document.querySelector('.notification')




function closeNotification() {
    notification.style.right = "-600px";


}

function details(pro) {
    // console.log(pro.parentElement.childNodes[3].innerHTML) // title
    // console.log(pro.previousElementSibling.childNodes[0].innerHTML); // price
    localStorage.setItem(pro.parentElement.childNodes[3].innerHTML, pro.previousElementSibling.childNodes[0].innerHTML);
    notification.style.right = "0px";
    setTimeout(closeNotification, 2000);

}


// productData take frome data.js. it has all the data of products

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((result) => {
        result.products.map((data) => {
            productContainer.innerHTML += `<div class="product">
        <img src=${data.thumbnail}>
        <h3>${data.title}</h3>
        <p class="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</p> 
        <p class="description">${data.description}</p>
        <p><span class="price">${data.price}</span><span">$</span>  &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; <span class="stock"> ${data.stock} stock </span></p>
        <button class="add-to-cart-btn" onclick="details(this)">Add to Cart</button>
        </div>`
        }
        )
    }
    );



closeBtn.addEventListener("click", closeNotification);





