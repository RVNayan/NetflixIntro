gsap.set(".l1, .l2, .l3", { opacity: 0 });

const sound = new Audio("sound/intro.mp3");
sound.loop = true;

const timeline = gsap.timeline({
    defaults: { duration: 0.5},
    onStart: () => {
      sound.play(); // Start playing the background sound when the animation starts
    },
    onComplete: () => {
      sound.pause(); // Pause the background sound when the animation completes
    }
  });

  timeline
    .fromTo(".l1", { transform: "scaleY(0)" }, { transform: "scaleY(1)", opacity: 1,duration:0.5,delay:0.1})
    .fromTo(".l3", { height: 0 }, { height: "220px", opacity: 1,duration:0.3})
    .fromTo(".l2", { transform: "scaleY(0)" }, { transform: "scaleY(1)", opacity: 1,duration:0.3 });

  const reverseTimeline = gsap.timeline({ defaults: { duration: 0.5} });
  reverseTimeline
    .fromTo(".l2", { transform: "scaleY(1)" }, { transform: "scaleY(0)", opacity: 0,delay:0.5 })
    .fromTo(".l3", { height: "220px" }, { height: 0, opacity: 0 })
    .fromTo(".l1", { transform: "scaleY(1)" }, { transform: "scaleY(0)", opacity: 0 });

  timeline.add(reverseTimeline); // Add the reverse timeline to play in reverse after the initial sequence




