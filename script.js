var hamburgerMenu = document.getElementById("hamburger_menu");
var closeMenu = document.getElementById("close_menu");
var navbarListMobile = document.querySelector(".navbar-list-mobile");
var atcButton = document.querySelector(".Atc-btn");
var cartItemNumber = document.getElementById("cart-item-number");
var numberAmount = document.querySelector(".number-amount");
var plusButton = document.getElementById("plus_button");
var minusButton = document.getElementById("minus_button");
var thumbnailPics = document.querySelectorAll(".thumbnail_pic");
var mobilePic = document.querySelector(".mobile_pic");
var amountOfSneakers = document.querySelector(".amountofsneakers");
var trashbin = document.querySelector(".trash_bin");
var cartEmptyMessage = document.querySelector(".cart-empty");
var modalAmountOfSneakers = document.querySelector(".amountofsneakers");
var checkoutBtn = document.querySelector(".checkout-btn");
var carticon = document.querySelector(".image-cart");
var Modal = document.getElementById("Modal");


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



// Step 2: Add event listeners
plusButton.addEventListener("click", function() {
    // Step 3: Increment the value by 1
    var currentValue = parseInt(numberAmount.innerText);
    numberAmount.innerText = currentValue + 1;
});

minusButton.addEventListener("click", function() {
    var currentValue = parseInt(numberAmount.innerText);
    if (currentValue > 0) {
        numberAmount.innerText = currentValue - 1;
    }
});



function setupNumberAmountEvents() {
    numberAmount.addEventListener("click", function() {
        // You can add additional logic here if needed
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var cartIcon = document.querySelector(".image-cart");
    var Modal = document.getElementById("Modal");

    // Function to toggle modal display
    function toggleModal() {
        if (Modal.style.display === "block") {
            Modal.style.display = "none";
        } else {
            Modal.style.display = "block";
        }
    }

    // Add click event listener to cart icon
    cartIcon.addEventListener("click", function() {
        toggleModal();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var trashBin = document.querySelector(".trash_bin");
    var cartEmptyMessage = document.querySelector(".cart-empty");
    var modalCheckout = document.querySelector(".Modal-checkout");
    var checkoutBtn = document.querySelector(".checkout-btn");

    // Function to handle order removal
    function removeOrder() {
        // Hide the modal, checkout button, and trash bin
        modalCheckout.style.display = "none";
        checkoutBtn.style.display = "none";
        trashBin.style.display = "none";

        // Display the "cart empty" message
        cartEmptyMessage.style.display = "block";
    }

    // Add click event listener to the trash bin icon
    trashBin.addEventListener("click", function() {
        removeOrder();
    });
});


atcButton.addEventListener("click", function() {
    // Step 3: Get the current value of "number-amount"
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
    
    amountOfSneakers.innerText = `$${pricePerSneaker.toFixed(2)} x ${cartItemNumber.innerText}`;

    // Find the elements in the modal
    
    

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
    

    // Assume you have a totalAmount element, you might select it like this
    var totalAmountElement = document.querySelector(".totalamount");

    // Example of calculating and updating the total price
    var pricePerSneaker = 125.00; // Replace this with the actual price per sneaker
    var numberOfSneakers = parseInt(cartItemNumber.innerText);

    var totalPrice = pricePerSneaker * numberOfSneakers;
    totalAmountElement.innerText = "$" + totalPrice.toFixed(2); // Format the total price as a currency
});









// Call the function to set up events for "number-amount" //
setupNumberAmountEvents();

// Add event listeners for "atc-btn"
// ... (Assuming you have already defined "atcButton" as shown in Step 2)







