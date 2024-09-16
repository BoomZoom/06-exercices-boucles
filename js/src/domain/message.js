// src/domain/message.js
class Message {
    constructor(content) {
        this.content = content;
        this.timestamp = new Date().toISOString();
    }
}

export default Message;
