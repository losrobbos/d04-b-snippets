console.log("Hello duuuudes")

// where we are coming from
// gsap.from("h1 > span", { 
//   delay: 1,
//   duration: 3,
//   opacity: 0,
//   y: 150,
//   ease: "elastic",
//   stagger: { 
//     each: 0.1,
//     // from: "center"
//   }
// })

// gsap.from("h1 > span", { 
//   duration: 3,
//   opacity: 0,
//   x: -50,
//   rotateY: -90,
//   ease: "bounce",
//   stagger: { 
//     each: 0.1,
//     // from: "center"
//   }
// })

// where we wanna get to
gsap.to("h1 > span", { 
  duration: 2,
  delay: 3,
  ease: Power4.easeIn,  
  scale: 50,
  opacity: 0,
  stagger: { 
    each: 0.2,
    from: "random"
  }
})
