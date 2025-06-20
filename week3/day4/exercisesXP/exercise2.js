const form = document.querySelector('form');
console.log(form);

const inputFnameById = document.getElementById('fname');
const inputLnameById = document.getElementById('lname');
console.log(inputFnameById);
console.log(inputLnameById);

const inputFnameByName = document.querySelector('input[name="firstname"]');
const inputLnameByName = document.querySelector('input[name="lastname"]');
console.log(inputFnameByName);
console.log(inputLnameByName);

const usersAnswerList = document.querySelector('.usersAnswer');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const fnameValue = inputFnameById.value.trim();
  const lnameValue = inputLnameById.value.trim();

  if (fnameValue === '' || lnameValue === '') {
    alert('Please fill in both first name and last name.');
    return;
  }

  usersAnswerList.innerHTML = '';

  const liFname = document.createElement('li');
  liFname.textContent = fnameValue;

  const liLname = document.createElement('li');
  liLname.textContent = lnameValue;

  usersAnswerList.appendChild(liFname);
  usersAnswerList.appendChild(liLname);

  form.reset();
});
