const ringNumber = 30;
const blackHole = document.querySelector(".black-hole");

// const ringArray = Array.from({length:ringNumber}, () => 0)
let ringSize = 0;
let ringArray = [];

const degreeToRad = (angle) => angle * Math.PI / 180;
for (let i = 0.; i <= ringNumber; i++){

  let halfMark = ringNumber/2
  let x = 200 + Math.pow(i,2.3) * 10;
  let y = i * 50;

  if( i <= halfMark){
  const ringCircle = document.createElement("div");

  ringCircle.classList.add("ring-circle-1");
  ringCircle.style.setProperty("--radius", `${x}px`);
  ringCircle.style.setProperty("--height", `${y}px`);
  ringCircle.style.setProperty("--shadow", `${i*5}px`);
  ringCircle.style.setProperty("zindex", `${i}`);
  ringCircle.style.setProperty("opacity", `${(1/i)*2}`);
  ringCircle.style.setProperty("--borderradius", `${(i/ringNumber)*15}px`);
  blackHole.appendChild(ringCircle);
  } else {
    let newIndex = i - halfMark
    x = 200 + Math.pow(newIndex,2.3) * 10;
    y = newIndex * 50;


    const ringCircle = document.createElement("div");

    ringCircle.classList.add("ring-circle-2");
    ringCircle.style.setProperty("--radius", `${x}px`);
    ringCircle.style.setProperty("--height", `${-y}px`);
    ringCircle.style.setProperty("--shadow", `${newIndex*5}px`);
    ringCircle.style.setProperty("zindex", `${-newIndex}`);
    ringCircle.style.setProperty("opacity", `${(1/newIndex)*2}`);
    ringCircle.style.setProperty("--borderradius", `${(newIndex/ringNumber)*5}px`);
    
    blackHole.appendChild(ringCircle);
  }
  

 

}
