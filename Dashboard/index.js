let file = document.querySelector('#file');
file.addEventListener('click',function(){
  console.log('Yes');
});

let homie = document.querySelector('.homie');
let form_login = document.querySelector('.c');
form_login.classList.add('active');
let first = document.querySelector('#button1');
let second = document.querySelector('#button2');
let loader = document.querySelector('.loader');
loader.classList.add('active');
let b = document.querySelector('.b');
let click_home = document.querySelector('.click_home');
b.classList.add('active');
let x = document.getElementById("snackbar");
function myFunction() {
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

let dashboard = document.querySelector('.anch3');
if (!dashboard.classList.contains('active')) {
  x.innerText = 'Visit your Dashboard';
}
let home = document.querySelector('.home_container');
let form = document.querySelector('.medicine_form');
let med_name = document.querySelector('#medicine_name');
let search = document.querySelector('.search');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (med_name.value === '') {
    return alert('Please give the name of medicine..');
  }
  fetch_data();

});

search.addEventListener('click', function (event) {
  event.preventDefault();
  if (med_name.value === '') {
    return alert('Please give the name of medicine..');
  }
  fetch_data();
});
let dashboard_data = document.querySelector('.dashboard_data');
let name = document.querySelector('.name');
let expire = document.querySelector('.expire');
let des1 = document.querySelector('.des1');
let des2 = document.querySelector('.des2');
let des3 = document.querySelector('.des3');
let warning = document.querySelector('.warning');
let when = document.querySelector('.when');
dashboard_data.classList.add('active');
let dashboard2 = document.querySelector('.dashboard2');
let fetchim = document.querySelector('.fetchimg');
let fetchimg = document.querySelector('.fetchimg img');
fetchimg.classList.add('active');
fetchim.classList.add('active');
async function fetch_data() {
  try {
    loader.classList.remove('active');
    let response = await fetch('https://priyanshu2912.github.io/medicine_json2/medicines.json');
    let data = await response.json();
    let medicines = data.medicines;
    let searchValue = med_name.value.toLowerCase(); // Convert the input value to lowercase

    medicines.forEach(function (item) {
      if (searchValue === item.name.toLowerCase()) { // Convert the medicine name to lowercase
        execute(item);
      }
    });

    loader.classList.add('active');
  }
  catch (error) {
    console.log(error);
  }
}

function execute(item) {
  name.innerText = `${item.name}`;
  expire.innerText = `${item.expiration_days} days`;
  des1.innerText = `*) ${item.description1}`;
  des2.innerText = `*) ${item.description2}`;
  des3.innerText = `*) ${item.description3}`;
  warning.innerText = `${item.warnings}`;
  when.innerText = `${item.when_to_take}`;
  fetchimg.src = `${item.image_url}`;
  dashboard_data.classList.remove('active');
  fetchim.classList.remove('active');
  fetchimg.classList.remove('active');
  dashboard2.style.margin = '5rem 0';
}

click_home.addEventListener('click', function () {
  home.classList.remove('active');
  b.classList.add('active');
})

let form2 = document.querySelector('.form');
let username = document.querySelector('.username');
let password = document.querySelector('.password');
let cancel_button = document.querySelector('.cancelbtn');
let login_button = document.querySelector('.login_button');
form2.addEventListener('submit', function (e) {
  e.preventDefault();
  if (username.value === '' || password.value === '') {
    return alert('Please fill up the details!');
  }

  dashboard.classList.remove('active');
  form_login.classList.add('active');
  homie.classList.remove('active');
})
cancel_button.addEventListener('click', function () {
  username.value = '';
  password.value = '';
})
login_button.addEventListener('click', function (e) {
  e.preventDefault();
  if (username.value === '' || password.value === '') {
    return alert('Please fill up the details!');
  }
  dashboard.classList.remove('active');
  form_login.classList.add('active');
  homie.classList.remove('active');
  x.innerText = 'Visit your Dashboard';
})
let dash = document.querySelector('.loginsection3');
dash.addEventListener('click',function(){
  home.classList.add('active');
  b.classList.remove('active');
})
