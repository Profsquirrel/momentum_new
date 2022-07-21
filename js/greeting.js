const USERNAME_KEY="userName";
const savedUsername=localStorage.getItem(USERNAME_KEY);


function paintGreetings(userName){
  $('#greeting').fadeIn(1000);
  greeting.innerText=`반가워요, ${userName}님`;
}

function onLoginSubmit(event){
  event.preventDefault();
  const userName=$('#login-form input').val();
  localStorage.setItem(USERNAME_KEY,userName);
  $(this).hide();
  paintGreetings(userName);
}

function logOff(event){
  if(confirm("정말 나가시겠어요? 할 일이 모두 지워져요")){
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem('todos');
    loginInput.value="";
    $('#login-form').show();
    $('#greeting').hide();
  }else{
    event.preventDefault();
  }
}

if(savedUsername===null){
  $('#login-form').show();
  $('#login-form').on("submit",onLoginSubmit);
}else{
  paintGreetings(savedUsername);
}

$('#login-form').on('submit',onLoginSubmit);
$('#btn_logoff').click(logOff);


