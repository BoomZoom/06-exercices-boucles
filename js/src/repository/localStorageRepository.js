// src/repository/localStorageRepository.js
const STORAGE_KEY = 'messages';

class LocalStorageRepository {
    saveMessages(messages) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }

    loadMessages() {
        const messages = localStorage.getItem(STORAGE_KEY);
        return messages ? JSON.parse(messages) : [];
    }

    deleteMessages() {
        localStorage.removeItem(STORAGE_KEY);
    }

    getMessages() {
        return this.loadMessages(); 
    }
}

export default new LocalStorageRepository();
