import Alert from '@utils/lib/Alert';
import React, { useState } from 'react';

export const MessageContext = React.createContext<{
  messages: { content: string; status: string }[];
  removeMessage?: (ms: { content: string; status: string }) => void;
  alert?: (ms: { content: string; status: string }) => void;
  addMessage?: (ms: { content: string; status: string }) => void;
}>({ messages: [] });

const MessageProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<{ content: string; status: string }[]>([]);
  const addMessage = (ms: { content: string; status: string }) => {
    setMessages((prev) => [...messages, ms]);
  };
  const removeMessage = (ms: { content: string; status: string }) => {
    const index = messages.findIndex((message) => message?.content == ms?.content);
    index > -1 ? messages.splice(index, 1) : '';
    setMessages(messages);
  };
  const alert = (message: { content: string; status: string }) => {
    addMessage?.(message);
    setTimeout(() => {
      removeMessage?.(message);
    }, 2000);
  };
  return (
    <MessageContext.Provider value={{ messages, addMessage, removeMessage, alert }}>
      {children}
      {messages?.map((message, id) => (
        <Alert message={message?.content} status={message?.status} key={id} />
      ))}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
