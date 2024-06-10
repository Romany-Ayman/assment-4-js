var butLogin =document.getElementById('btnLogin')
butLogin.addEventListener('click',informationAdd)
var emailInput = document.getElementById('inputName')
var passwordInput= document.getElementById('inputPassword5')


function informationAdd(){
   if(emailInput.value=== '' ||passwordInput.value=== '' ){
    document.getElementById("masseg").innerHTML = "Please fill out the Input ";
    document.getElementById('masseg').style.color='red'
    return;
   }
   var dataLast=[]
   if(localStorage.getItem("containerData")!==null){
    dataLast=JSON.parse(localStorage.getItem("containerData"))
 }
 else{
    document.getElementById("masseg").innerHTML = "No users registered.";
    return;

 }
   var information={
    email1:emailInput.value,
    pass1:passwordInput.value
}

checkInformation(information, dataLast)
}
function checkInformation(info, dataLast){
   var checkInput=false;
   for(var i=0; i<dataLast.length; i++){
    if(dataLast[i].email === info.email1   &&   dataLast[i].pass === info.pass1){
       
        localStorage.setItem('nameNew',JSON.stringify(dataLast[i].name))

        document.getElementById("masseg").innerHTML = "Dane";
         window.location='./home.html'
        checkInput=true

    }
   }
 if(!checkInput){
    document.getElementById("masseg").innerHTML = "Invalid email or password";
    document.getElementById('masseg').style.color = 'red';
 }


}