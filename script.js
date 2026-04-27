function promijeniTekst() {
  document.getElementById("poruka").textContent =
    "Šta upireš koji kurac";
}
function posaljiFormu(event) {
  event.preventDefault();

  document.getElementById("status").textContent =
    "ae";
}