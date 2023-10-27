var hamburgerMenu = document.getElementById("hamburger_menu");
var closeMenu = document.getElementById("close_menu");
var navbarListMobile = document.querySelector(".navbar-list-mobile");

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

