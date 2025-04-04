
    function toggleForm() {
        var loginContainer = document.getElementById("login-container");
        var registerContainer = document.getElementById("register-container");
        
        if (loginContainer.style.display === "none") {
            loginContainer.style.display = "block";
            registerContainer.style.display = "none";
        } else {
            loginContainer.style.display = "none";
            registerContainer.style.display = "block";
        }
    }

    function validateLogin() {
        var username = document.getElementById("login-username").value;
        var password = document.getElementById("login-password").value;
        var errorMessage = document.getElementById("login-error-message");

        var storedUsername = localStorage.getItem("username");
        var storedPassword = localStorage.getItem("password");


        if (username === storedUsername && password === storedPassword) {
            alert("Login Successful!");
            window.location.href = "../index.html";  
        } else {
            errorMessage.textContent = "Invalid Student ID or Password";
        }
    }

    function registerUser() {
        var username = document.getElementById("reg-username").value;
        var email = document.getElementById("reg-email").value;
        var password = document.getElementById("reg-password").value;
        var errorMessage = document.getElementById("register-error-message");


        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!email.match(emailPattern)) {
            errorMessage.textContent = "Please enter a valid email address";
            return;
        }

        if (username && email && password) {
           
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            alert("Registration Successful! You can now log in.");
            toggleForm();
        } else {
            errorMessage.textContent = "Please fill in all fields";
        }
    }

  
    function resetFormFields() {
        document.getElementById("login-username").value = "";
        document.getElementById("login-password").value = "";
        document.getElementById("reg-username").value = "";
        document.getElementById("reg-email").value = "";
        document.getElementById("reg-password").value = "";
    }

