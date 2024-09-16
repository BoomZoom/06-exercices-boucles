// src/usecases/getMessagesUseCase.js
import LocalStorageRepository from '../repository/localStorageRepository.js';

const getMessagesUseCase = () => {
    const repository = LocalStorageRepository;
    return repository.loadMessages();
};

export default getMessagesUseCase;
