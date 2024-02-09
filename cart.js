// Get the button with id 'addToCart'
const addToCartButton = document.getElementById('addToCart');

// Add a click event listener to the button
addToCartButton.addEventListener('click', function () {
    // Get the product details from the card
    const productName = this.parentElement.querySelector('.card-title').innerText;
    const productPrice = parseFloat(this.parentElement.querySelector('.price').innerText.slice(1));

    // Create a new cart item object
    const cartItem = {
        name: productName,
        price: productPrice,
        quantity: 1
   };

    // Add the cart item to the cart
 });

// Function to add a cart item to the cart
function addToCart(item) {
    // Check if the cart is already present in local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    const existingItem = cart.find(cartItem => cartItem.name === item.name);

    // If the item is already in the cart, increment its quantity
    if (existingItem) {
        existingItem.quantity++;
    } else {
        // Otherwise, add the item to the cart
        cart.push(item);
    }

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}