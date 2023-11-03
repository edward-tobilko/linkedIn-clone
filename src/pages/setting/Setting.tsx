import { useState, SyntheticEvent, ChangeEvent } from "react";

interface Message {
  text: string;
  file?: File;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value);
  };

  const handleFileChange = (event: SyntheticEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files.length) {
      setSelectedFile(event.currentTarget.files[0]);
    }
  };

  const sendMessage = (): void => {
    if (message || selectedFile) {
      const newMessage: Message = {
        text: message,
        file: selectedFile!,
      };

      setMessages([...messages, newMessage]);

      setMessage("");
      setSelectedFile(null);
    }
  };

  return (
    <div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index}>
            {msg.text}
            {msg.file && <img src={URL.createObjectURL(msg.file)} alt="File" />}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message"
      />
      <input type="file" onChange={handleFileChange} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
