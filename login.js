document.getElementById('bnt-submit').addEventListener('click',function(){
    //step:2 get the email address inside the input filed
    // awles rember to use .value to get the text form an input filed
    const emailFiled=document.getElementById('user-email');
    const email=emailFiled.value;
    console.log(email)
    const passwordFiled=document.getElementById('user-password');
    const password=passwordFiled.value;
    //stype:4 virify email and password
if(email === 'mishat@bapp.come' && password === 'mishat'){
    window.location.href='bank.html'
}
else{
    alert('tui goya mara kha')
}
})