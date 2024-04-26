function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var outputDiv = document.getElementById("output");
    var userDiv = document.getElementById("user");

    if (username.length < 4 || username.trim() === '') {
        alert("Username should contain at least four characters.");
        return;
    } else if (password.length < 6 || password.length > 12 || password.trim() === '') {
        alert("Password should be 6-12 characters long.");
        return;
    }

    outputDiv.textContent = "Username: " + username;
    userDiv.textContent = "Password: " + password;
}
