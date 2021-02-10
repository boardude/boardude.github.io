/* MODALS */
/** general rules **/
// When the user clicks on <span> (x), close the modal
var close = document.getElementsByClassName("close")[0];
var modal = document.getElementsByClassName("modal")[0];

close.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
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