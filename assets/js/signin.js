function signin () {
  var email = document.getElementById('txt-email').value;
  var password = document.getElementById('txt-password').value;

  var loginUrl = config.apiUrl + '/users/validateLogin';

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
    if (window.localStorage) {
      window.localStorage.setItem('loginStatus', JSON.stringify('USER_LOGIN'));
        console.log('localStorage done');
    } else {
      console.log('localStorage not supported');
    }
      console.log('data.body: ', data);
  })
  .catch(function (err) {
    console.log('Error: ', err);
  })
  ;
}

var btnSignIn = document.getElementById('btn-signin');

btnSignIn.addEventListener('click', signin);
