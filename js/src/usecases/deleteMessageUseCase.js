// src/usecases/deleteMessageUseCase.js
import LocalStorageRepository from '../repository/localStorageRepository.js';

const deleteMessageUseCase = (index) => {
    const repository = LocalStorageRepository;
    const messages = repository.loadMessages();
    if (index >= 0 && index < messages.length) {
        messages.splice(index, 1);
        repository.saveMessages(messages);
    }
};

export default deleteMessageUseCase;
