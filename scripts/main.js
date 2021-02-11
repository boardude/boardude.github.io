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
    document.getElementById("nametagContainer").style.display = "flex";
}

/* COPY EMAIL TO CLIPBOARD */
function fallbackCopyEmail() {
    var email = document.createElement("textarea");
    email.value = 'mkzh.org@gmail.com';
    
    // Avoid scrolling to bottom
    email.style.top = "0";
    email.style.left = "0";
    email.style.position = "fixed";
  
    document.body.appendChild(email);
    email.focus();
    email.select();  
    email.setSelectionRange(0, 99999); /* For mobile devices */
  
    document.execCommand('copy');
    document.body.removeChild(email);
}

function copyEmail() {
    if (!navigator.clipboard) {
      fallbackCopyEmail();
      return;
    }
    navigator.clipboard.writeText('mkzh.org@gmail.com');
}