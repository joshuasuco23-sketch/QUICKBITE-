function goBack(){ alert('Back button clicked (placeholder).'); }

function togglePwd(id, btn){
  const field = document.getElementById(id);
  if(field.type === 'password'){ field.type = 'text'; btn.textContent='🙈'; }
  else { field.type='password'; btn.textContent='👁️'; }
}

function showSignup(e){
  if(e) e.preventDefault();
  document.getElementById('login-card').style.display='none';
  document.getElementById('signup-card').style.display='block';
  document.getElementById('header-title').textContent='New Account';
}

function showLogin(e){
  if(e) e.preventDefault();
  document.getElementById('login-card').style.display='block';
  document.getElementById('signup-card').style.display='none';
  document.getElementById('header-title').textContent='Log In';
}

function submitLogin(){
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-pass').value;
  alert('Login Submitted: ' + email);
}

function submitSignup(){
  const name = document.getElementById('full-name').value;
  alert('Signup Submitted: ' + name);
  showLogin();
}
