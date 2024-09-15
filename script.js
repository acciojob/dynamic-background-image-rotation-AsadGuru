//your JS code here. If required.

function updateBackground() {
	if(window.innerHeight > window.innerWidth) {
		//portrait mode

		document.body.classList.add('portrait-background');
		document.body.classList.remove('landscape-background');		
	} else {
		//landscape mode
		portrait.body.classList.add('landscape-background');
		portrait.body.classList.remove('portrait-background');
	}
}

//initial calll to set the background on page load
updateBackground();

//addd event listener to update background on resize
window.addEventListener('resize', updateBackground);