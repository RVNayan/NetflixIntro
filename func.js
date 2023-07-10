gsap.set(".l1, .l2, .l3", { opacity: 0 });

	const sound = new Audio("sound/intro.mp3");
	sound.loop = true;

	const timeline = gsap.timeline({
	  defaults: { duration: 0.5 },
	  onStart: () => {
	    sound.play(); // Start playing the background sound when the animation starts
	    setTimeout(generateLines,1000);
	  },
	  onComplete: () => {
	    sound.pause(); 
	    const linesContainer = document.querySelector(".lines");
	    gsap.to(linesContainer, { opacity: 0, duration: 1, delay: 2, onComplete: hideElement });

	  }
	});

	timeline
	  .fromTo(".l1", { transform: "scaleY(0)" }, { transform: "scaleY(1)", opacity: 1, duration: 0.5, delay: 0.1 })
	  .fromTo(".l3", { height: 0 }, { height: "220px", opacity: 1, duration: 0.3 })
	  .fromTo(".l2", { transform: "scaleY(0)" }, { transform: "scaleY(1)", opacity: 1, duration: 0.3 });

	const reverseTimeline = gsap.timeline({ defaults: { duration: 0.5 } });
	reverseTimeline
	  .fromTo(".l2", { transform: "scaleY(1)" }, { transform: "scaleY(0)", opacity: 0, delay: 0.5 })
	  .fromTo(".l3", { height: "220px" }, { height: 0, opacity: 0 })
	  .fromTo(".l1", { transform: "scaleY(1)" }, { transform: "scaleY(0)", opacity: 0 });

	timeline.add(reverseTimeline); // Add the reverse timeline to play in reverse after the initial sequence

	function generateLines() {
	  const colors = ["#7F0000", "#B53000", "#7F007F", "#00007F", "#28007F", "#821717", "#C8510E", "#822982", "#141482", "#371482"];
	  const linesContainer = document.querySelector(".lines");

	  for (let i = 0; i < colors.length; i++) {
	    const line = document.createElement("div");
	    line.classList.add("line");
	    line.style.backgroundColor = colors[i];
	    linesContainer.appendChild(line);

	    // Animate the line's opacity
	    gsap.to(line, { opacity: 1, duration: 0.3, delay: 0.1 * i });
	  }
	}
// Get the .l1 element
const l1Element = document.querySelector('.l1');

// Get the position of the .l1 element relative to the viewport
const l1Position = l1Element.getBoundingClientRect();
function hideElement() {
  // Set display none to hide the linesContainer
  linesContainer.style.display = "none";
}
console.log('L1 position:', l1Position);


