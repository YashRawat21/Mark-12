var input = document.querySelectorAll(".angle-input");
var isTrianglebtn = document.querySelector("#is-Triangle-btn");
var outputE1 = document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3){
    var sumOfAngles = angle1 + angle2 + angle3 ;
    return sumOfAngles;
}

function isTriangle(){
     sumOfAngles = calculateSumOfAngles(Number(input[0].value),Number(input[1].value),Number(input[2].value));
    if(sumOfAngles===180){
        outputE1.innerText="Hurray, it's a triangle";
    }else{
        outputE1.innerText="Nops, it's not a triangle";
    }

}
isTrianglebtn.addEventListener("click",isTriangle);
