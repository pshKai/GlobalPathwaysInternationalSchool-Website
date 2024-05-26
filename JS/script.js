/* Navigation Bar Toggle */
var navLinks = document.getElementById("navLinks");
function showMenu() {

    navLinks.style.right = "0";

}
function hideMenu() {

    navLinks.style.right = "-200px";

}

/* Sign Up, Login Toggle */
let signupButton = document.getElementById("signup-button");
let signinButton = document.getElementById("signin-button");
let nameField = document.getElementById("name-field");
let title = document.getElementById("title");
let guest = document.getElementById("guest");
signinButton.onclick = function() {

    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    guest.innerHTML = "";
    signupButton.classList.add("disable");
    signinButton.classList.remove("disable");

}
signupButton.onclick = function() {

    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    guest.innerHTML = '<a href="../index.html">Login as a guest</a>';
    guest.querySelector('a').style.color = "#EA0000";
    signupButton.classList.remove("disable");
    signinButton.classList.add("disable");

}