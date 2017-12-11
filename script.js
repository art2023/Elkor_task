var save_button = document.getElementById('Save'),
    enter_button = document.getElementById('Enter')

//Animation
$(document.getElementById('Registration')).click(function () {
    $('form').animate({height: "toggle", opacity: "toggle"}, "fast");
});
$(document.getElementById('Return')).click(function () {
    $('form').animate({height: "toggle", opacity: "toggle"}, "fast");
});

//Save data to local storage
save_button.onclick = saveData;

function saveData() {
    var input = document.getElementById("LoginRegistration");
    localStorage.setItem("Login", input.value);
    input = document.getElementById("PasswordRegistration");
    localStorage.setItem("Password", input.value);
    input = document.getElementById("NameRegistration");
    localStorage.setItem("Name", input.value);
}

//Get data from local storage
enter_button.onclick = showData;

function showData() {
    var storedValue = localStorage.getItem("Login");
    var storedValue2 = localStorage.getItem("Password");
    if ((document.getElementById('Login').value == storedValue) && (document.getElementById('Password').value == storedValue2)) {
        window.open('quiz.html')
    }
    else {
        alert('Login or password is incorrect');
    }
}
