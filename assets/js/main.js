// animation texte page accueil

redimentionFen = function () {
  var largEcran = window.innerWidth;
  var hautEcran = window.innerHeight;
  if (window.innerWidth <= 1024) {
    largEcran = window.innerWidth;
  }
  if (window.innerHeight >= 800) {
    hautEcran = window.innerHeight;
  }
};

var position = 0;
var msg =
  "Lucie et Ruben  t'invitent  à leurs  anniversaires et baptême qui ce tiendra le 04/07/2021 à l'eglise de Breal sous Monfort à 10h30 et à la sale Pierre Jakez Helias plus tard ca va être la Chimamelure 👻! ...  ";
var msg = " " + msg;
var long = msg.length;
var fois = 76 / msg.length + 1;
for (i = 0; i <= fois; i++) {
  msg += msg;
}
function textdefil() {
  document.form1.deftext.value = msg.substring(position, position + 76);
  position++;
  if (position == long) position = 0;
  setTimeout("textdefil()", 250);
}
window.onload = textdefil;