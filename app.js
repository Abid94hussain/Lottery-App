let h1 = document.querySelector("h1");
let span = document.querySelector("span");
let button = document.querySelector("button");

button.addEventListener("click", function () {
     let digit = random();
     span.innerText = digit;
     let sum = 0;

     while (digit) {
          sum += digit % 10;
          digit = Math.floor(digit / 10);
     }
     
     if (sum == 15) {
          h1.innerText = "Congeratulations You won Lottery";
     }
     else {
          h1.innerText = "Lottery";
     }
});

function random() {
     let random = Math.floor(Math.random() * 900) + 100;
     return random;
}