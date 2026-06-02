// GSAP Library
// https://unpkg.com/gsap@3/dist/gsap.min.js

// GSAP Dev Tools
GSDevTools.create();

gsap.registerPlugin();

// Ghost G - float up and down + fade in on load
gsap.from("#big-G", { opacity: 0, duration: 1, ease: "power2.out" });
gsap.to("#big-G", {
  y: -12,
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  delay: 1
});

// Pumpkins (o, o, e) - wobble
gsap.to("#o", {
  rotation: 3,
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  transformOrigin: "bottom center"
});

gsap.to("#e", {
  rotation: -3,
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  delay: 0.3,
  transformOrigin: "bottom center"
});

// Cat G - tail swish
gsap.to("#g", {
  rotation: 4,
  duration: 1.5,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  transformOrigin: "bottom center"
});

// Candle L - flicker
gsap.to("#l", {
  opacity: 0.7,
  scaleX: 1.02,
  duration: 0.4,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  transformOrigin: "bottom center"
});
