/* CHANGING SIZES OF BROWSER UI ELEMENTS (mobile) */
// Find real viewport height and set --vh at :root as 1% of height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// When window resizes, calculate vh again as above
window.addEventListener('resize', () => {
    let vh = window.outerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

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
var nametag = document.getElementById("nametagContainer"); 
var showCard = function() {
    nametag.style.display = "flex";
}

/* Show x when hovering over close button*/
var close = document.getElementById("nametagClose");
var closeX = document.getElementById("nametagCloseX");
close.onmouseover = function() {
    closeX.style.display = 'block';
}

close.onmouseleave = function() {
    closeX.style.display = 'none';
}

closeX.onmouseover = function() {
    closeX.style.display = 'block';
}

closeX.onmouseleave = function() {
    closeX.style.display = 'none';
}

// When the user clicks on the close button, close the modal
var closeModal = function() {
    nametag.style.display = "none";
}
close.onclick = closeModal;
closeX.onclick = closeModal;

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

/* SHOW TOOLTIP WHEN HOVERING OVER ICONS ON NAMETAG MODAL */
var email = document.getElementById("emailIcon");
var emailTip =  document.getElementById("emailTip");
var emailCopied = document.getElementById("emailCopied");
email.onmouseover = function() {
    emailCopied.style.display = 'none';
    emailTip.style.display = 'block';
}
email.onmouseleave = function() {
    emailTip.style.display = 'none';
}
email.onclick = function() {
    emailTip.style.display = 'none';
    emailCopied.style.display = 'block';
}

var linkedIn = document.getElementById("linkedInIcon");
var linkedInTip = document.getElementById("linkedInTip");
linkedIn.onmouseover = function() {
    linkedInTip.style.display = 'block';
}

linkedIn.onmouseleave = function() {
    linkedInTip.style.display = 'none';
}

var gitHub = document.getElementById("gitHubIcon");
var gitHubTip = document.getElementById("gitHubTip");
gitHub.onmouseover = function() {
    gitHubTip.style.display = 'block';
}

gitHub.onmouseleave = function() {
    gitHubTip.style.display = 'none';
}

