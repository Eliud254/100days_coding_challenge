// Initialize products
let product1 = { id: 1, name: "Laptop", price: 999.99, quantity: 10 };
let product2 = { id: 2, name: "Smartphone", price: 499.99, quantity: 20 };
let product3 = { id: 3, name: "Headphones", price: 99.99, quantity: 30 };

// Initialize users
let user1 = { id: 1, name: "John", email: "john@example.com", isAdmin: true };
let user2 = { id: 2, name: "Jane", email: "jane@example.com", isAdmin: false };

// Initialize orders
let orders = [];

// Function to display available products
function displayProducts() {
    console.log("Available Products:");
    console.log(`ID: ${product1.id}, Name: ${product1.name}, Price: $${product1.price}, Quantity: ${product1.quantity}`);
    console.log(`ID: ${product2.id}, Name: ${product2.name}, Price: $${product2.price}, Quantity: ${product2.quantity}`);
    console.log(`ID: ${product3.id}, Name: ${product3.name}, Price: $${product3.price}, Quantity: ${product3.quantity}`);
}

// Function to add a new order
function addOrder(user, productId, quantity) {
    let product;
    if (productId === product1.id) {
        product = product1;
    } else if (productId === product2.id) {
        product = product2;
    } else if (productId === product3.id) {
        product = product3;
    } else {
        console.log("Invalid product ID.");
        return;
    }

    if (product && product.quantity >= quantity) {
        let order = { userId: user.id, productId, quantity, totalPrice: product.price * quantity };
        orders.push(order);
        console.log("Order placed successfully.");
        product.quantity -= quantity;
    } else {
        console.log("Failed to place order. Product not available or insufficient quantity.");
    }
}

// Main e-commerce system loop
let loggedInUser;
while (true) {
    console.log("\n1. Display Products\n2. Place Order\n3. Logout");
    let choice = parseInt(prompt("Enter your choice:"));

    if (choice === 1) {
        displayProducts();
    } else if (choice === 2) {
        if (loggedInUser) {
            let productId = parseInt(prompt("Enter the ID of the product you want to order:"));
            let quantity = parseInt(prompt("Enter the quantity:"));
            addOrder(loggedInUser, productId, quantity);
        } else {
            console.log("Please log in to place an order.");
        }
    } else if (choice === 3) {
        console.log("Logging out.");
        loggedInUser = undefined;
    } else {
        console.log("Invalid choice. Please try again.");
    }
}
