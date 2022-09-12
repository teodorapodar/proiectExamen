
//script meniu-navigare

const menu=document.querySelector('#mobile-menu')
const menuLinks=document.querySelector('.navbar__menu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//Validare date formular

const nameInput = document.querySelector('#name'),
      email = document.querySelector('#email'),
      message = document.querySelector('#message'),
      success = document.querySelector('#success'),
      errorNode = document.querySelectorAll('.error');

function validateForm(){

    clearMessages();
    let errorFlag = false;


   if(nameInput.value.length < 1 ){
    errorNode[0].innerHTML = "Numele si prenumele sunt obligatorii!";
    nameInput.classList.add('error-border');
    errorFlag = true;
   }
   if(!emailIsValid(email.value)){
    errorNode[1].innerHTML = "Adresa de email este incorecta!";
    nameInput.classList.add('error-border');
    errorFlag = true;
   }
   if(message.value.length < 1){
    errorNode[2].innerHTML = "Va rugam sa adaugati un comentariu!"
    message.classList.add('error-border')
    errorFlag = true;
   }
   if(!errorFlag){
      success.innerText = "Informatiile au fost trimise cu succes!";
   }
}

//Clear error/mesaj de succes

function clearMessages(){
    for(let i=0;i < errorNode.length;i++){
        errorNode[i].innerHTML="";
    }
    success.innerText = "";
    nameInput.classList.remove('error-border');
    email.classList.remove('error-border');
    message.classList.remove('error-border');
}

//am adaugat un pattern sa verific daca emailul se potriveste
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}