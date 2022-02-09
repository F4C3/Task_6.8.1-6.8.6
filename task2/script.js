const  consoleLog = document.querySelector('#consoleLog');

const  ale = document.querySelector('#alert');

const  prom = document.querySelector('#prompt');


  consoleLog.addEventListener('click', () => { 
    alert('Пример использования команды console.log');
})
  
  ale.addEventListener('click', () => {
    alert('Пример использования команды alert');
})

  prom.addEventListener('click', () => {  
    alert('Пример использования команды prompt');
})