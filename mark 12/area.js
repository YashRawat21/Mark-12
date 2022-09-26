var sides = document.querySelectorAll(".sides-input");
var checkAreaBtn = document.querySelector("#check-area-btn");
var outputE1 = document.querySelector("#output");

function calculateArea(Base,Height){
    var area = Base*Height/2;
    return area;

}

function calculateAreaOfTriangle(){
      var area = calculateArea(Number(sides[0].value),Number(sides[1].value));
      outputE1.innerText = " The area of triangle is " + area ; 
}

checkAreaBtn.addEventListener("click",calculateAreaOfTriangle);