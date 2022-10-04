const calculateButton = document.querySelector('.calculate-btn')
const base = document.querySelector('#base-value')
const height = document.querySelector('#height-value')
const outputElement = document.querySelector('#output-message')



calculateButton.addEventListener('click',calculateArea)

function calculateArea() {

  const baseLength = base.value 
  const heightLength = height.value

  if( baseLength < 0 || heightLength < 0 ){
    outputElement.innerHTML = 'Only positive lengths are accepted !!'
  } else {

    const product = baseLength * heightLength
    const area = 1/2 * product
    outputElement.innerText = "The area is " + area + "cm²"
  }

  
}