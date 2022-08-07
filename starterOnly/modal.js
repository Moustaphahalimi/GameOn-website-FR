function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnCloseModal = document.querySelector(".close")
const messageValidation = document.querySelector(".messagevalidation")

//input
const firstName = document.getElementById("first")
const lastName = document.getElementById("last")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")
const nbOfTournement = document.getElementById("quantity")
const loc = document.getElementsByName("location")
const checkbox1 =document.getElementById("checkbox1")
const formulaire = document.getElementById("formulaire")
// Error
var err_firstName = document.getElementById("err_firstName")
var err_lastName = document.getElementById("err_lastName")
var err_email = document.getElementById("err_email")
var err_birthdate = document.getElementById("err_birthdate")
var err_nbOfTournement = document.getElementById("err_quantity")
var err_checkbox1 = document.getElementById("err_checkbox2")
var err_location= document.getElementById("err_location")
var regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close 
btnCloseModal.addEventListener("click", function(){
  modalbg.style.display = "none"
})


let formValide = false

formulaire.addEventListener("submit", function (event) {
  if (firstName.value === "" || firstName.value.length < 2 ) {
    console.log("Remplir votre prénom avec 2 lettres minimums")
    err_firstName.innerHTML = "Remplir votre prénom avec 2 lettres minimums";
    err_firstName.style.fontSize= "12px"
    err_firstName.style.backgroundColor= "red"
    event.preventDefault();
    return formValide === false
  } 
  else{
    err_firstName.style.display= "none"
  }
 
  if (lastName.value === "" || lastName.value.length < 2 ) {
    console.log("Remplir votre nom avec 2 lettres minimums")
    err_lastName.innerHTML = "Remplir votre nom avec 2 lettres minimums";
    err_lastName.style.fontSize= "12px"
    err_lastName.style.color= "red"
    event.preventDefault();
    return formValide === false
  }
  else{
    err_lastName.style.display= "none"
  }
  
  if (regexEmail.test(email.value) == false){
    console.log("Entrez une adresse mail correct")
    err_email.innerHTML = "Entrez une adresse mail correct";
    err_email.style.fontSize= "12px"
    err_email.style.color= "red"
    valide = false
    event.preventDefault();
    return formValide === false
  }
  else{
    err_email.style.display= "none"
  }

  if(nbOfTournement.value <= 0 || nbOfTournement>=100){
    err_nbOfTournement.innerHTML = "Veuillez renseigner quelque chose"
    err_nbOfTournement.style.fontSize= "12px"
    err_nbOfTournement.style.color= "red" 
    event.preventDefault();
    return formValide === false
  }
  else{
    err_nbOfTournement.style.display= "none"
  }

  if( !(loc[0].checked || loc[1].checked || loc[2].checked || loc[3].checked || loc[4].checked || loc[5].checked) ){
    console.log("Veuillez selectionné une ville");
    err_location.innerHTML= "Veuillez selectionné une ville"
    err_location.style.fontSize= "12px"
    err_location.style.color= "red"
    event.preventDefault();
    return formValide === false
  }
  else{
    err_location.style.display= "none"
  }

  if(!checkbox1.checked){
    err_checkbox1.innerHTML="Veuillez acceptez les conditions d'utilisations."
    err_checkbox1.style.fontSize= "12px"
    err_checkbox1.style.color= "red"
    event.preventDefault();
    return formValide === false
  }
  else{
    err_checkbox1.style.display= "none"
  }
  
  return formValide = true
 
});


function validate (){

  if (formValide === true){
    messageValidation.style.display = "block"
    

  }
}

formulaire.addEventListener('submit', validate ());