const ringNumber = 33;
const blackHole = document.querySelector(".black-hole");

// const ringArray = Array.from({length:ringNumber}, () => 0)
let ringSize = 0;
let ringArray = [];

const degreeToRad = (angle) => angle * Math.PI / 180;
for (let i = 0.; i <= ringNumber; i++){

  let halfMark = ringNumber/2
  let x = 100 + Math.pow(i,2) * 3;
  let y = i * 20;

  const ringCircle = document.createElement("div");

  ringCircle.classList.add("ring-circle");
  ringCircle.style.setProperty("--radius", `${x}px`);
  ringCircle.style.setProperty("--height", `${y}px`);
  ringCircle.style.setProperty("zindex", `${i}`);
  ringCircle.style.setProperty("opacity", `${(i/ringNumber)*2}`);
  ringCircle.style.setProperty("--borderradius", `${(i/ringNumber)*5}px`);

  blackHole.appendChild(ringCircle);

}
