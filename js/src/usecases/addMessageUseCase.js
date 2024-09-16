// src/usecases/addMessageUseCase.js
import LocalStorageRepository from '../repository/localStorageRepository.js';
import Message from '../domain/message.js';

const addMessageUseCase = (content) => {
    const repository = LocalStorageRepository;
    const messages = repository.loadMessages();
    const message = new Message(content)
    messages.push(message);
    repository.saveMessages(messages);
};

export default addMessageUseCase;
