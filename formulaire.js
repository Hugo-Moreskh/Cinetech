window.onload = function() {
    var form = document.getElementById("login-form");
    var emailInput = document.getElementById("email");

    form.addEventListener("submit", function(event) {
        if (emailInput.value.indexOf("@") === -1) {
            alert("L'email doit contenir un '@'.");
            event.preventDefault();
        }
    });
};