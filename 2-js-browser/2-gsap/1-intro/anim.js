
console.log(" Yay, ich bin da! Los geht's, animier den Sch***")

// how to get autocompletion / intellisense for this library?

gsap.from("h1 > span", {
  duration: 2,
  y: -100,
  opacity: 0,
  // stagger: 0.2,
  stagger: {
    each: 0.1,
    from: "random"
  },
  ease: Bounce.easeOut,
})

gsap.to("h1 > span", {
  delay: 4,
  duration: 2,
  scale: 50,
  opacity: 0,
  stagger: {
    each: 0.1,
    from: "random"
  },
  ease: Power4.easeIn,
})

