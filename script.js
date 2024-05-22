
let meanu = document.querySelector('#meanubar');
let navul = document.querySelector('#ul');
let productContainer = document.querySelector('#products');
let notification = document.querySelector('.notification')
let closeBtn = document.querySelector(".close-btn")


// navbar
let checkmeanu = true;
meanu.addEventListener('click', () => {
  if (checkmeanu == true) {
    navul.style.display = 'flex';
    meanu.classList.replace('fa-bars', 'fa-xmark');
    checkmeanu = false;
  }
  else {
    navul.style.display = 'none';
    meanu.classList.replace('fa-xmark', 'fa-bars');

    checkmeanu = true;

  }
}
)

var typed = new Typed('#heading', {
  strings: ['Welcome to <br> Noor E-commerce'],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 1000,
  startDelay: 1000,
  loop: true,
});


// New products 


fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then((result) => {

    console.log(result)

    result.map((data) => {
      productContainer.innerHTML += `<div class="product">
        <img src=${data.image}>
        <h3>${data.title}</h3>
        <p class="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</p> 
        <p class="description">${data.description}</p>
        <p><span class="price">${data.price}</span><span">$</span> </p>
        <button class="add-to-cart-btn" onclick="details(this)">Add to Cart</button>
        </div>`
    }
    )
  }
  );

function details(pro) {
  // console.log(pro.parentElement.childNodes[3].innerHTML) // title
  // console.log(pro.previousElementSibling.childNodes[0].innerHTML); // price
  localStorage.setItem(pro.parentElement.childNodes[3].innerHTML, pro.previousElementSibling.childNodes[0].innerHTML);
  notification.style.right = "0px";
  setTimeout(closeNotification, 2000);

}

function closeNotification() {
  notification.style.right = "-600px";


}

closeBtn.addEventListener("click", closeNotification);
