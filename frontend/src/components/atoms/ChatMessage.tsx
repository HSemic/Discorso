import React from 'react';

interface ChatMessageProps {
  text: string;
  source: 'user' | 'bot';
}

const ChatMessage = ({
  text,
  source
}: ChatMessageProps): React.ReactElement => {
  return (
    <div className={`chat__row chat__row--${source}`}>
      <span className={`chat__message chat__message--${source}`}>{text}</span>
    </div>
  );
};

export default ChatMessage;
