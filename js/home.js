var button =document.getElementById('btnLogout')
button.addEventListener('click',newPag)

 var names=JSON.parse(localStorage.getItem("nameNew"))

document.getElementById('textWelcome').innerHTML += ' ' + names;
// window.alert('halowwe')


function newPag(){
    window.location='./index.html'
}
