const input1 = document.querySelector('input');
const btn = document.querySelector('button');
const txt = document.querySelector('#duplicateField');

input1.addEventListener('input', function() {
  txt.textContent = input1.value;  
  })

btn.addEventListener('mousedown', function() {
  console.log(input1.value); 
  })

btn.removeEventListener('mouseup', function() {
  console.log(input1.value);  
  })

btn.addEventListener('mouseup', function() {
  input1.value = ""
  txt.textContent = "";
  })



