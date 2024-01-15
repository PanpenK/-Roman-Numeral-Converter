const convertButton = document.getElementById('convert-btn');
const inputField = document.getElementById('number');
const output = document.getElementById('output');

function convert() {
  const inputNumber = inputField.value;
  if (!inputNumber) {
    output.textContent = 'Please enter a valid number';
    output.classList.remove('hide');
    output.style.backgroundColor = 'red';
    output.style.fontSize = '12px'
    return
  } 
  if (inputNumber < 0 ) {
    output.textContent = 'Please enter a number greater than or equal to 1';
    output.classList.remove('hide');
    output.style.backgroundColor = 'red';
    output.style.fontSize = '12px'
    return
  } 
  if (inputNumber > 3999 ) {
    output.textContent = 'Please enter a number less than or equal to 3999';
    output.classList.remove('hide');
    output.style.backgroundColor = 'red';
    output.style.fontSize = '12px'
    return
  } 

  if (toRomanNumber(inputNumber)){
  output.textContent = toRomanNumber(inputNumber)
  output.classList.remove('hide');
  }
}

function toRomanNumber(num){
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  let roman = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      roman += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }

  return roman;
}

convertButton.addEventListener('click', convert);