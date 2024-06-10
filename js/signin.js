var myButton= document.getElementById('butSignUp')
myButton.addEventListener('click', addData )
var nameInput =document.getElementById('nameInput1')

var emailInput =document.getElementById('emailInput1')

var passwordInput = document.getElementById('inputPassword5')

 var dataLast=[]
 if(localStorage.getItem("containerData")!==null){
    dataLast=JSON.parse(localStorage.getItem("containerData"))
 }
 


 function addData(){
    if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
        document.getElementById("masseg").innerHTML = "Please fill out the information ";
        document.getElementById('masseg').style.color='red'
        return;
    }
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
        document.getElementById("masseg").innerHTML = "Please enter a valid email address";
        document.getElementById('masseg').style.color = 'red';
        return;
 
    }
    var data ={
        name: nameInput.value,
        email: emailInput.value,
        pass: passwordInput.value,      
    }
    
    console.log( dataLast);
    var checkData= false;
    for( var i=0 ;i<dataLast.length;i++){
        if (dataLast[i].email === data.email ) {
            checkData = true;
        

    }
    
    
 }
 if (!checkData) {
    dataLast.push(data);
    localStorage.setItem('containerData', JSON.stringify(dataLast));
    console.log(dataLast);
    document.getElementById("masseg").innerHTML= (" Activated  ")
    document.getElementById('masseg').style.color='green'
} else {
  document.getElementById("masseg").innerHTML= (" The email exists before  ")
  document.getElementById('masseg').style.color='red'
}
 }
 