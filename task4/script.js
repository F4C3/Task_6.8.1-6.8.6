// document.querySelector('a').addEventListener('click', () => {  
//   textContent = a
//   prompt('Введите текст');  
//   })

const userText = prompt('Введите текст');
const userTextField = document.querySelector('a');
userTextField.textContent = userText;
console.log('Текст в блоке с id userTextField изменён на', userText);

