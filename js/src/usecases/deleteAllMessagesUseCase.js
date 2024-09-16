// src/usecases/deleteAllMessagesUseCase.js
import LocalStorageRepository from '../repository/localStorageRepository.js';

const deleteAllMessagesUseCase = () => {
    const repository = LocalStorageRepository;
    repository.deleteMessages();
};

export default deleteAllMessagesUseCase;
