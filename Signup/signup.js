let form = document.querySelector('.signup_form');
let input = document.querySelectorAll('.input');
let signup = document.querySelector('.signupbtn');
let psw1 = document.querySelector('#pasw1');
let psw2 = document.querySelector('#pasw2');
let cancel = document.querySelector('.cancelbtn');
let otp = document.querySelector('.otp_button');
let otp_text = document.querySelector('.otp_text');
let verify_button = document.querySelector('.verify button');
let email = document.querySelector('#email');
// verify_button.classList.add('active');
// otp_text.classList.add('active');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    input.forEach(function (item) {
        if (item.value === '') {
            return alert("Please fill up the details!");
        }
    });
    if (psw1.value !== psw2.value) {
        return alert('Password does not match!');
    }
    window.location.href = '../Dashboard/index.html';
});

signup.addEventListener('click', function (e) {
    e.preventDefault();
    input.forEach(function (item) {
        if (item.value === '') {
            return alert("Please fill up the details!");
        }
    });
    if (psw1.value !== psw2.value) {
        return alert('Password does not match!');
    }
    window.location.href = '../Dashboard/index.html';
});
cancel.addEventListener('click', function () {
    input.forEach(function (item) {
        item.value = "";
    })
});

