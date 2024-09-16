import addMessageUseCase from '../usecases/addMessageUseCase.js';
import deleteMessageUseCase from '../usecases/deleteMessageUseCase.js';
import deleteAllMessagesUseCase from '../usecases/deleteAllMessagesUseCase.js';
import getMessagesUseCase from '../usecases/getMessagesUseCase.js';
import editMessageUseCase from '../usecases/editMessageUseCase.js';
import showModal from '../modal.js'

const logContainer = document.querySelector('.log-container');
const consoleInput = document.querySelector('.console-input');
const sendButton = document.querySelector('.send-button');
const clearAllButton = document.querySelector('.clear-all-button');

var editIndex = null; 

export function renderLogs() {
    logContainer.innerHTML = '';
    const messages = getMessagesUseCase();

    messages.forEach((message, index) => {
        const logGroup = document.createElement('div');
        logGroup.className = 'log-group';

        if (Array.isArray(message.content)){
            message.content.forEach((messageSpan, index) => {
                // console.info(messageSpan)
                const logMessage = document.createElement('span');
                logMessage.className = 'log-message';
                logMessage.textContent = messageSpan;
                logGroup.appendChild(logMessage);
            })
        }else {
            const logMessage = document.createElement('span');
            logMessage.className = 'log-message';
            logMessage.textContent = message.content;
            logGroup.appendChild(logMessage);
        }

        const messageActions = document.createElement('div');
        messageActions.className = 'message-actions';

        const editButton = document.createElement('button');
        editButton.className = 'edit-button';
        editButton.innerHTML = '<i class="fa fa-edit"></i>';
        editButton.onclick = () => {
            editIndex = index;
            showModal('Change value', message.content, (newMessage) => {
                if (editIndex !== null) {
                    editMessageUseCase(editIndex, newMessage);
                    renderLogs();
                }
            });
        };
        messageActions.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
        deleteButton.onclick = () => {
            deleteMessageUseCase(index);
            renderLogs();
        };
        messageActions.appendChild(deleteButton);

        logGroup.appendChild(messageActions);
        logContainer.appendChild(logGroup);
    });

    logContainer.scrollTop = logContainer.scrollHeight;
}


function sendMessage() {
    console.info(consoleInput.value)
    const message = consoleInput.value.trim();
    console.info(message)
    try {
        const evMessage = eval(message)

        if (evMessage) {
            addMessageUseCase(evMessage);
            renderLogs();
        }
        consoleInput.value = '';
    } catch (error) {
        addMessageUseCase(message);
        consoleInput.value = '';
        renderLogs();
        console.error(error)
    }
    
    
}

sendButton.addEventListener('click', sendMessage);
consoleInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

clearAllButton.addEventListener('click', () => {
    deleteAllMessagesUseCase();
    renderLogs();
});

renderLogs();