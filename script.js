var hamburgerMenu = document.getElementById("hamburger_menu");
var closeMenu = document.getElementById("close_menu");
var navbarListMobile = document.querySelector(".navbar-list-mobile");
var atcButton = document.querySelector(".Atc-btn");
var cartItemNumber = document.getElementById("cart-item-number");
var numberAmount = document.querySelector(".number-amount");

hamburgerMenu.addEventListener("click", function() {
    // Toggle the display of .navbar-list-mobile when hamburger_menu is clicked
    if (navbarListMobile.style.display === "block") {
        navbarListMobile.style.display = "none";
    } else {
        navbarListMobile.style.display = "block";
    }
});

closeMenu.addEventListener("click", function() {
    // Collapse .navbar-list-mobile when close_menu is clicked
    navbarListMobile.style.display = "none";
});

// Step 1: Get elements by ID
var plusButton = document.getElementById("plus_button");
var minusButton = document.getElementById("minus_button");

// Step 2: Add event listeners
plusButton.addEventListener("click", function() {
    // Step 3: Increment the value by 1
    var numberAmount = document.querySelector(".number-amount");
    var currentValue = parseInt(numberAmount.innerText);
    numberAmount.innerText = currentValue + 1;
});

minusButton.addEventListener("click", function() {
    // Step 4: Decrement the value by 1, but not below 0
    var numberAmount = document.querySelector(".number-amount");
    var currentValue = parseInt(numberAmount.innerText);
    if (currentValue > 0) {
        numberAmount.innerText = currentValue - 1;
    }
});



function setupNumberAmountEvents() {
    var numberAmount = document.querySelector(".number-amount");

    numberAmount.addEventListener("click", function() {
        // You can add additional logic here if needed
    });
}

var atcButton = document.querySelector(".Atc-btn");
var cartItemNumber = document.getElementById("cart-item-number");

atcButton.addEventListener("click", function() {
    // Step 3: Get the current value of "number-amount"
    var numberAmount = document.querySelector(".number-amount");
    var currentValue = parseInt(numberAmount.innerText);

    // Step 4: Reset the "number-amount" to 0
    numberAmount.innerText = 0;

    // Step 5: Pass the current value to "cart-item-number" for notification
    var cartValue = parseInt(cartItemNumber.innerText);
    cartItemNumber.innerText = cartValue + currentValue;

    // Step 6: Multiply the price and update the checkout modal
    var pricePerSneaker = 125.00; // Replace this with your actual price
    var totalPrice = pricePerSneaker * cartItemNumber.innerText;

    // Step 7: Update the total price display in the modal
    var amountOfSneakers = document.querySelector(".amountofsneakers");
    amountOfSneakers.innerText = `$${pricePerSneaker.toFixed(2)} x ${cartItemNumber.innerText}`;

    // Find the elements in the modal
    var modalAmountOfSneakers = document.querySelector(".amountofsneakers");
    var checkoutBtn = document.querySelector(".checkout-btn");
    var cartEmptyMessage = document.querySelector(".cart-empty");

    // Check if the cart is empty
    if (currentCartItemValue > 0) {
        // Show the checkout modal with updated price
        modalAmountOfSneakers.innerText = `$${pricePerSneaker.toFixed(2)} x ${currentCartItemValue} = $${totalPrice.toFixed(2)}`;
        checkoutBtn.style.display = "block";
        cartEmptyMessage.style.display = "none";
    } else {
        // Show the cart is empty message
        modalAmountOfSneakers.innerText = "";
        checkoutBtn.style.display = "none";
        cartEmptyMessage.style.display = "block";
    }


    // You can add additional logic for the checkout process here //
});
document.addEventListener("DOMContentLoaded", function() {
    // Assume you have a cartItemNumber element, you might select it like this
    var cartItemNumber = document.getElementById("cart-item-number");

    // Assume you have a totalAmount element, you might select it like this
    var totalAmountElement = document.querySelector(".totalamount");

    // Example of calculating and updating the total price
    var pricePerSneaker = 125.00; // Replace this with the actual price per sneaker
    var numberOfSneakers = parseInt(cartItemNumber.innerText);

    var totalPrice = pricePerSneaker * numberOfSneakers;
    totalAmountElement.innerText = "$" + totalPrice.toFixed(2); // Format the total price as a currency
});

document.addEventListener("DOMContentLoaded", function() {
    var thumbnailPics = document.querySelectorAll(".thumbnail_pic");
    var mobilePic = document.querySelector(".mobile_pic");

    thumbnailPics.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            // Set the source of mobile_pic to the clicked thumbnail
            mobilePic.src = images/image-product-1-thumbnail.jpg;
            mobilePic.src = images/image-product-2-thumbnail.jpg;
            mobilePic.src = images/image-product-3-thumbnail.jpg;
            mobilePic.src = images/image-product-4-thumbnail.jpg;
        });
    });
});







// Call the function to set up events for "number-amount" //
setupNumberAmountEvents();

// Add event listeners for "atc-btn"
// ... (Assuming you have already defined "atcButton" as shown in Step 2)







