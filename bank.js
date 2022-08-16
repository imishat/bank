
//add butten ade get input valu
document.getElementById('bnt-deposit').addEventListener('click', function(){
//get the input filed value
const depositFiled=document.getElementById('deposit-field');
const dspositamount=depositFiled.value;
const dspositNew=parseFloat(dspositamount);


//get the set in tag 
//none input tag getn the innertext
const dipositTotalElemet=document.getElementById('diposit-text')
const dipositTotal=dipositTotalElemet.innerText;
const nem=parseFloat(dipositTotal);

const courrrentdipositTotal=nem+dspositNew;


// set the value input field
dipositTotalElemet.innerText=courrrentdipositTotal;
//add total blance

//cler the deposit filed
depositFiled.value='';


})