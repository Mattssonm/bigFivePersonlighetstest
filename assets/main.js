window.addEventListener("load", () => {
  console.log("Hello");

let answers = {
  one: 0,
  two: 0
};



let radios = document.querySelectorAll('input[type="radio"]');
console.log(radios);

for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener("click", event => {
    console.log(this);
  })
}


// questions[0].addEventListener("click", () => {
//   console.log("uppdaterar objekt");
//   console.log(this.);
// })

console.log(answers);
})
