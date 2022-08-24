function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const btnCloseModal = document.querySelector(".close")
const messageValidation = document.querySelector(".messagevalidation")
const closeConfirmation = document.getElementById('closeConfirmation')
const btn_signup = document.querySelector('cconfirm')

//input
const firstName = document.getElementById("first")
const lastName = document.getElementById("last")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")
const nbOfTournement = document.getElementById("quantity")
const loc = document.getElementsByName("location")
const alllocation = document.querySelector('.alllocation')
const checkbox2_label = document.querySelector('checkbox2-label')
const checkbox1 =document.getElementById("checkbox1")
const formulaire = document.getElementById("formulaire")
// Error
var err_firstName = document.getElementById("err_firstName")
var err_lastName = document.getElementById("err_lastName")
var err_email = document.getElementById("err_email")
var err_birthdate = document.getElementById("err_birthdate")
var err_nbOfTournement = document.getElementById("err_quantity")
var err_checkbox1 = document.getElementById("err_checkbox1")
var err_location= document.getElementById("err_location")

var regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
var regexBirthdate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close 
btnCloseModal.addEventListener("click", function(){
  modalbg.style.display = "none"
  messageValidation.style.display="none"
  formulaire.style.display = 'block'
  formulaire.reset();
})





formulaire.addEventListener("submit", function (event) {
  let formValide = true
  event.preventDefault();
  if (firstName.value === "" || firstName.value.length < 2 ) {
    err_firstName.style.display= "block"
    err_firstName.innerHTML = "Veuillez Remplir votre prénom avec 2 lettres minimums";
    err_firstName.style.fontSize= "12px"
    err_firstName.style.color= "red"
    firstName.style.border = "3px red solid"
    formValide = false
    event.preventDefault();
  } 
  else{
    err_firstName.style.display= "none"
    firstName.style.border = "none"
  }
  
 
  if (lastName.value === "" || lastName.value.length < 2 ) {
    err_lastName.style.display= "block"
    err_lastName.innerHTML = "Veuillez Remplir votre nom avec 2 lettres minimums";
    err_lastName.style.fontSize= "12px"
    err_lastName.style.color= "red"
    lastName.style.border= "red 3px solid"
    formValide = false
    event.preventDefault();
    
  }
  else{
    err_lastName.style.display= "none"
    lastName.style.border= "none"

  }

  
  
  if (regexEmail.test(email.value) == false){
    err_email.style.display= "block"
    err_email.innerHTML = "Veuillez Entrez une adresse mail correct";
    err_email.style.fontSize= "12px"
    err_email.style.color= "red"
    email.style.border= "red 3px solid"
    formValide = false
    event.preventDefault();
    
  }
  else{
    err_email.style.display= "none"
    email.style.border= "none"
  }


  if (!regexBirthdate.test(birthdate.value)) {
    err_birthdate.style.display = "block"
    err_birthdate.innerHTML = "Veuillez entrez une date de naissance valide"
    birthdate.style.border = "red 3px solid"
    err_birthdate.style.color= "red"
    err_birthdate.style.fontSize= "12px"
    formValide = false
    event.preventDefault();


  }
  else{
    birthdate.style.border = "none"
    err_birthdate.style.display = "none"
  }

  if(nbOfTournement.value <= 0 || nbOfTournement>=100){
    err_nbOfTournement.style.display= "block"
    err_nbOfTournement.innerHTML = "Veuillez renseigner quelque chose"
    err_nbOfTournement.style.fontSize= "12px"
    err_nbOfTournement.style.color= "red" 
    nbOfTournement.style.border= "red 3px solid" 
    formValide = false
    event.preventDefault();
    
  }
  else{
    err_nbOfTournement.style.display= "none"
    nbOfTournement.style.border= "none" 

  }


  if( !(loc[0].checked || loc[1].checked || loc[2].checked || loc[3].checked || loc[4].checked || loc[5].checked) ){
    err_location.style.display= "block"
    err_location.innerHTML= "Veuillez selectionné une ville"
    err_location.style.fontSize= "12px"
    err_location.style.color= "red"
    alllocation.style.border= "red 3px solid"
    formValide = false
    event.preventDefault();
    
  }
  else{
    err_location.style.display= "none"
    alllocation.style.border= "none"
  }


  if(!checkbox1.checked){
    err_checkbox1.style.display= "block"
    err_checkbox1.innerHTML="Veuillez acceptez les conditions d'utilisations."
    err_checkbox1.style.fontSize= "12px"
    err_checkbox1.style.color= "red"
    formValide = false
    event.preventDefault();
   
  }
  else{
    err_checkbox1.style.display= "none"
    checkbox1.style.border= "none"

  }

  if(formValide == true){ 
  messageValidation.style.display = "flex"
  formulaire.style.display = 'none'}
  console.log("je passe par la ");
   
});


closeConfirmation.addEventListener("click", function(){
messageValidation.style.display ="none"
formulaire.style.display = 'block'
 modalbg.style.display="none"
 formulaire.reset();
 
 
})

