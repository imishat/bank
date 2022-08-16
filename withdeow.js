document.getElementById('bnt-widthdrad').addEventListener('click',function(){
const widthdradFiled=document.getElementById('widthdrad-field');
const widthdradAmount=widthdradFiled.value;
const widthdradNwe=parseFloat(widthdradAmount);
const widthdradElement=document.getElementById('wid-text')
const widthdradText=widthdradElement.innerText;
const convet=parseFloat(widthdradText);
const count2=convet+widthdradNwe;
widthdradElement.innerText=count2;
widthdradFiled.value='';
}
)