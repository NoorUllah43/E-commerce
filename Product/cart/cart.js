let tbody = document.querySelector('tbody');
let totalItems = document.querySelector('#total-items');
let totalPrice = document.querySelector('#total-price');
let checkoutBtn = document.querySelector('.checkout-button');
let closeBtn = document.querySelector(".close-btn")
let notification = document.querySelector('.notification')
let totalPriceCal = 0;

function closeNotification(){
    notification.style.right = "-600px";

    
}
closeBtn.addEventListener("click", closeNotification);


function deleteItem(item){
    localStorage.removeItem(item.parentElement.parentElement.childNodes[1].innerHTML)
    item.parentElement.parentElement.remove();
    notification.style.right = "0px";
    setTimeout(closeNotification, 2000);
}

for (let i = 0; i < localStorage.length; i++) {

    tbody.innerHTML += `<tr>
<td>${localStorage.key(i)}</td>
<td>${localStorage.getItem(localStorage.key(i))}</td>
<td>  <button class="delete-btn" onclick="deleteItem(this)">
<lord-icon
    src="https://cdn.lordicon.com/skkahier.json"
    trigger="hover"
    style="width:25px;height:25px">
</lord-icon>
</button></td>
</tr>`
    totalPriceCal += parseInt(localStorage.getItem(localStorage.key(i)))
}

 
totalPrice.innerHTML = totalPriceCal
totalItems.innerHTML = localStorage.length;
checkoutBtn.addEventListener('click', () => {
    if (confirm("you want to oder your item or itmes")) {
        
        tbody.innerHTML = ''
        localStorage.clear()
        alert('Your order is successful')
    }
}
)