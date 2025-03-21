let cart = []; // Array to hold cart items

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    alert(`${product.name} has been added to your cart.`);
}

// Function to remove a product from the cart
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    alert(`${productName} has been removed from your cart.`);
}

// Function to display cart items
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(itemElement);
    });
}

// Function to handle search functionality
function searchProducts() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        product.style.display = productName.includes(searchTerm) ? 'block' : 'none';
    });
}

document.getElementById('checkout').addEventListener('click', function() {
    document.getElementById('billing').style.display = 'block';
});

// Add event listeners
document.getElementById('signin-button').addEventListener('click', function() {
    const dropdown = document.getElementById('signin-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Add event listeners
document.getElementById('search-bar').addEventListener('input', searchProducts);
