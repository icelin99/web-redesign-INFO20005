let cart = [
    {name: 'Lesro Lenox Steel Modern Fabric Guest Chair in Silver/Open House Black', originalPrice: 558.00, price: 312.48, shipping: 'Free', image: 'images/chair1.webp',quantity: 1, options: 'Option 1'},
    {name: 'Bestar 3 Drawer Mobile File Pedestal in Wood', originalPrice: 1038.00,  price: 522.99, shipping: 'Free', image: 'images/cab1.webp',quantity: 1, options: 'Option 1'},
    {name: 'Lesro Lenox Steel Modern Fabric Guest Chair in Silver/Open House Black', originalPrice: 531.00, shipping: 'Free', price: 257.99, image: 'images/chair2.webp',quantity: 1, options: 'Option 1'},
    {name: 'Pemberly Row 50" L Shaped Industrial Writing Desk with File Cabinet', originalPrice: 194.99, price: 191.99,image: 'images/desk1.webp',shipping: 'Free', quantity: 1, options: 'Option 1'},
];

function updateCart() {
    let cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = ' ';

    let total = 0;

    for(let item of cart) {
        total += item.price * item.quantity;
        let itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';

        let imgDiv = document.createElement('img');
        imgDiv.src = item.image;
        itemDiv.appendChild(imgDiv);
        
        
        let titleDiv = document.createElement('div');
        titleDiv.className = 'cart-item-title';
        titleDiv.innerText = item.name;
        itemDiv.appendChild(titleDiv);

        // let optionsDiv = document.createElement('div');
        // optionsDiv.className = 'cart-item-options';
        // optionsDiv.innerText = item.options;
        // itemDiv.appendChild(optionsDiv);

        let priceDiv = document.createElement('div');
        priceDiv.className = 'cart-item-price';
        priceDiv.innerText = '$' + item.originalPrice.toFixed(2);
        itemDiv.appendChild(priceDiv);

        let specialpriceDiv = document.createElement('div');
        specialpriceDiv.className = 'cart-item-special-price';
        specialpriceDiv.innerText = '$' + item.price.toFixed(2);
        itemDiv.appendChild(specialpriceDiv);

        let shippingDiv = document.createElement('div');
        shippingDiv.className = 'cart-item-shipping';
        shippingDiv.innerText = item.shipping;
        itemDiv.appendChild(shippingDiv);

        let quantityDiv = document.createElement('div');
        quantityDiv.className = 'cart-item-quantity';
        let select = document.createElement('select');
        for(let i = 1; i <= 10; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.text = i.toString();
            if(i === item.quantity){
                option.selected = true;
            }
            select.appendChild(option);
        }
        quantityDiv.appendChild(select);
        itemDiv.appendChild(quantityDiv);

        let totalDiv = document.createElement('div');
        totalDiv.className = 'cart-item-total';
        totalDiv.innerText = '$' + (item.price*item.quantity).toFixed(2);
        itemDiv.appendChild(totalDiv);

        let deleteDiv = document.createElement('div');
        deleteDiv.className = 'cart-item-delete';
        deleteDiv.innerText = 'Delete';
        itemDiv.appendChild(deleteDiv);

        cartDiv.appendChild(itemDiv);
    }

    let orderSummaryDiv = document.getElementById('order-summary');

    let titleDiv = document.createElement('div');
    titleDiv.className = 'order-title';
    titleDiv.innerText = 'Order Summary';
    orderSummaryDiv.appendChild(titleDiv);

    let subtotalDiv = document.createElement('div');
    subtotalDiv.className = 'order-summary-item';
    subtotalDiv.innerHTML = '<span>Subtotal</span> <span>$' + total.toFixed(2) + '</span>';
    orderSummaryDiv.appendChild(subtotalDiv);

    let shippingDiv = document.createElement('div');
    shippingDiv.className = 'order-summary-item';
    shippingDiv.innerHTML = '<span>Shipping</span> <span>Free</span>';
    orderSummaryDiv.appendChild(shippingDiv);

    let totalDiv = document.createElement('div');
    totalDiv.className = 'order-summary-item';
    totalDiv.innerHTML = '<span>Total</span> <span>$' + total.toFixed(2) + '</span>';
    orderSummaryDiv.appendChild(totalDiv);

    let checkout = document.createElement('button');
    checkout.id = 'checkout';
    checkout.textContent = 'Go To Checkout';
    // var container = document.getElementById("buttonContainer");
    // container.appendChild(checkout);
    orderSummaryDiv.appendChild(checkout);
    checkout.addEventListener("click", function() {
        localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'checkout.html';
      });
}

// document.getElementById('checkout').addEventListener('click', function() {
//     localStorage.setItem('cart', JSON.stringify(cart));
//     window.location.href = 'checkout.html';
// });

updateCart();

