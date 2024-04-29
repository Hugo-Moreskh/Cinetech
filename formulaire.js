window.onload = function() {
    var form = document.getElementById("login-form");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    form.addEventListener("submit", function(event) {
        var email = emailInput.value;
        if (email.indexOf("@") === -1 || (email.indexOf(".fr") === -1 && email.indexOf(".com") === -1)) {
            alert("L'email doit contenir un '@' et se terminer par .fr ou .com.");
            event.preventDefault();
        } else if (!isPasswordStrong(passwordInput.value)) {
            alert("Le mot de passe doit contenir au moins 8 caractères, incluant au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.");
            event.preventDefault();
        }
    });
    

    function isPasswordStrong(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-]).{8,}$/.test(password);
    }
};
