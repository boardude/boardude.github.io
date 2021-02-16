/* CHANGING SIZES OF BROWSER UI ELEMENTS (mobile) */
// Find real viewport height and set --vh at :root as 1% of height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// When window resizes, reset height to 100vh to prevent excessive
// height changes from causing visual disfigurement
var resized = false;
var preLanding = document.getElementById("pre-landing")
window.onresize = function() {
    if (!resized) {
        preLanding.style.height = '100vh';
    }
    resized = true;
}

/* LANDING TEXT TYPEWRITER EFFECT */
var typeText = [
    "a web developer",
    "a software engineer",
    "an avid learner",
    "a golfer"
];

var typewriter = function(arr, charIndex, wordIndex, charDelay) {
    var destination = document.getElementById("typewriter");
    destination.innerHTML = arr[wordIndex].substring(0, charIndex) + "|";
    if (charIndex++ == arr[wordIndex].length) { // end of a word
        wordIndex++;
        if (wordIndex == arr.length) { // end of the list of words
            setTimeout(function() {
                typewriter(arr, 0, 0, 100)
            }, 2000);
        } else {
            setTimeout(function() {
                typewriter(arr, 0, wordIndex, charDelay)
            }, 2000);
        }
    } else { // in the middle of typing a word
        setTimeout(function() {
            typewriter(arr, charIndex, wordIndex, charDelay)
        }, charDelay);
    }
}

/* Make sure typewriter only runs once when bound to the scroll event listener below*/
function once(fn, context) { /* generic once function */
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}

var typewriterOnce = once(function() {
    typewriter(typeText, 0, 0, 100);
});

/* LOAD ON SCROLL */
var onScroll = function() {
    var landingText = document.getElementsByClassName("landing-text-container")[0];
    if (window.pageYOffset >= preLanding.clientHeight * 0.6) {
        landingText.style.display = 'block';
        setTimeout(typewriterOnce, 2000);
    }
};
window.addEventListener('scroll', onScroll);


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

