var button = document.getElementById("register");
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");

button.addEventListener("click", function() {
    console.log(firstname.value);
    lastname.value = firstname.value + " " + firstname.value;
})