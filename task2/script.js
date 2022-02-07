const  consoleLog = document.querySelector('#consoleLog');

const  alert = document.querySelector('#alert');


consoleLog.addEventListener('click', () => {
  console.log('Пример использования команды console.log')  
  this.alert('Пример использования команды console.log');
  })

  
  alert.addEventListener('click', () => {
  this.alert('Пример использования команды alert');
})

document.querySelector('#prompt').addEventListener('click', () => {
  prompt('Пример использования команды prompt')  
  this.alert('Пример использования команды prompt');
})