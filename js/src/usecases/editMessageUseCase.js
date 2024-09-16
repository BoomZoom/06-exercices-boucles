// usecases/editMessageUseCase.js
import LocalStorageRepository from '../repository/localStorageRepository.js'


export default function editMessageUseCase(index, newContent) {
    const messages = LocalStorageRepository.getMessages();
    if (index >= 0 && index < messages.length) {
        messages[index] = { content: newContent, timestamp: messages[index].timestamp };
        LocalStorageRepository.saveMessages(messages);
    }
}
