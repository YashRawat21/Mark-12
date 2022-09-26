var sides = document.querySelectorAll(".side-input");
var hypotenuseBtn = document.querySelector("#hypotenuse-btn");
var outputE1 = document.querySelector("#output");

function calculateSumofSquares(a,b){
    var sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    sumOfSquares = calculateSumofSquares(Number(sides[0].value), Number(sides[1].value));
    var lenghtOfHypotenuse= Math.sqrt(sumOfSquares);
    outputE1.innerText = "The lenght of hypotenuse is " + lenghtOfHypotenuse;
}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);