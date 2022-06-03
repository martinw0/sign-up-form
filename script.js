var form  = document.getElementsByTagName('form')[0];
var email = document.querySelector('.email input');
var divEmail = document.querySelector('.email');
var first = document.querySelector('.first input');
var divFirst = document.querySelector('.first');
var last = document.querySelector('.last input');
var divLast = document.querySelector('.last');
var pass = document.querySelector('.pass input');
var divPass = document.querySelector('.pass');

email.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ e-mail.
  if (email.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    
    divEmail.classList.remove('error'); // On réinitialise l'état visuel du message
  }
}, false);
first.addEventListener("input", function (event) {
    if (first.validity.valid) {      
      divFirst.classList.remove('error');
    }
  }, false);
last.addEventListener("input", function (event) {
    if (last.validity.valid) {      
      divLast.classList.remove('error');
    }
  }, false);
pass.addEventListener("input", function (event) {
    if (pass.validity.valid) {      
      divPass.classList.remove('error');
    }
  }, false);
form.addEventListener("submit", function (event) {
    // Chaque fois que l'utilisateur tente d'envoyer les données
    // on vérifie que le champ email est valide.
    if (!email.validity.valid) {
  
        divEmail.classList.add('error');

      // Et on empêche l'envoi des données du formulaire
      event.preventDefault();
    }
    if (first.value == "") {
        divFirst.classList.add('error');
      event.preventDefault();
    }
    if (last.value == "") {
        divLast.classList.add('error');
      event.preventDefault();
    }
    if (pass.value == "") {
        divPass.classList.add('error');
      event.preventDefault();
    }
  }, false);