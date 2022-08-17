document.getElementById('login-btn').addEventListener('click', () => {
  const email = document.getElementById('user-email').value;
  const password = document.getElementById('user-password').value;

  // DANGER: DO NOT VERITY email or password on the client side
  // gmail and password validation check 
  if(email == 'name' && password == 1234) {
    window.location.href = 'bank.html';
  }
  else{
    alert("Incorrect your email or password");
  }
});