// function myLog(...messages) {
//     const logContainer = document.querySelector('.log-container');
//     const logGroup = document.createElement('div');
//     logGroup.className = 'log-group';
    
//     messages.forEach(message => {
//         const logMessage = document.createElement('span');
//         logMessage.className = 'log-message';
        
//         logMessage.textContent = typeof message === 'object' ? JSON.stringify(message, null, 2) : message;
        
//         logGroup.appendChild(logMessage);
//     });
    
//     logContainer.appendChild(logGroup);
//     logContainer.scrollTop = logContainer.scrollHeight;
// }

// const originalConsoleLog = console.log;

// // Переопределение console.log
// console.log = function(...args) {
//     // Вызов оригинальной функции console.log
//     originalConsoleLog.apply(console, args);
//     // Вызов вашей функции логирования
//     myLog(...args);
// };
import addMessageUseCase from './src/usecases/addMessageUseCase.js';
import {renderLogs} from './src/ui/console.js';

function myLog(...messages) {
    addMessageUseCase(messages)
    renderLogs();
}

const originalConsoleLog = console.log;

export default console.log = function(...args) {
    originalConsoleLog.apply(console, args);
    myLog(...args);
};
