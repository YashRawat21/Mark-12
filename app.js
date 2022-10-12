const inputs = document.querySelectorAll('.angle-input')
const checkButton = document.querySelector('.check-btn')
const result = document.querySelector('.output-message')

// const outputMessage = document.querySelector('.output-display')


function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3
  return sum
}
function isTriangle() {
  
  const angle1 = Number(inputs[0].value)
  const angle2 = Number(inputs[1].value)
  const angle3 = Number(inputs[2].value)

  const sum = sumOfAngles(angle1,angle2,angle3)
  // console.log(sum);
  
  if(angle1 > 0 && angle2 > 0 && angle3 > 0) { 
    if(sum === 180 ){
      console.log("yes it's a triangle")
      result.innerText = "Yay, It's a triangle."
      // displayTriangle()

    } else {
      // console.log("No it's not a triangle")
      result.innerText = "No, It's not a triangle."
      // displayNotATriangle()

    }
  }
  else if(angle1 <= 0 || angle2 <=0 || angle3 <=0){
    result.innerText = 'Angle values cannot be Empty, Negative or equal to zero.'
    // outputMessage.style.display = 'block'
    // triangleGif.style.display = 'none'
    // notTriangleGif.style.display = 'none'
  } 
}

// function displayTriangle() {
//   outputMessage.innerHTML = 'Yes, Its a <span>Triangle</span>'
//   outputMessage.style.display = 'block'
//   notTriangleGif.style.display = 'none' 
//   triangleGif.style.display = 'block'
// }

function displayNotATriangle() {
  outputMessage.innerHTML = 'No, Its <span>Not a Triangle</span>'
  outputMessage.style.display = 'block'
  notTriangleGif.style.display = 'block'
  triangleGif.style.display = 'none'
}
checkButton.addEventListener('click',isTriangle)