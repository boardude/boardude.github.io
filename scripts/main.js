/* MODALS */
/** general rules **/
// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementsByClassName("modal")[0];
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

/** specific rules **/
// When the user clicks on the nametag, open a business card modal
var showCard = function() {
    document.getElementById("nametagInfo").style.display = "block";
}