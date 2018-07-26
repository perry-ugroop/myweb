function signin () {
  var email = document.getElementById('txt-email').value;
  var password = document.getElementById('txt-password').value;

  var loginUrl = config.apiUrl + '/users/login';

  fetch(loginUrl, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: email, password: password }),
  })
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log('data.body: ', data);
  })
  .catch(function (err) {
    console.log('Error: ', err);
  })
  ;
}

var btnSignIn = document.getElementById('btn-signin');

btnSignIn.addEventListener('click', signin);
