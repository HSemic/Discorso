import React, { useEffect, useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import ChatMessage from "../atoms/ChatMessage";

import { fetchChatMessage } from "../../services/chatService";

interface ChatProps {
  chatType: "aiml" | "nlp";
}

const Chat = ({ chatType }: ChatProps): React.ReactElement => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      text: `Hi! I am ${chatType.toUpperCase()} chatbot. Chat with me!`,
      source: "bot",
    },
  ]);
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const scrollToBottom = () => {
    if (bottomRef.current !== null)
      bottomRef.current.scrollTop = bottomRef.current?.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const onUserInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUserInput(event.currentTarget.value);
  };

  const onSendMessageButtonClick = async (userMessage: string) => {
    setMessages((messages) => [
      ...messages,
      { text: userInput, source: "user" },
    ]);

    setUserInput("");

    setLoading(true);

    const result = await fetchChatMessage(userMessage, chatType);

    setMessages((messages) => [...messages, { text: result, source: "bot" }]);

    setLoading(false);
  };

  const onThinkForMeButtonClick = async () => {
    setLoading(true);

    const result = await fetchChatMessage(
      messages[messages.length - 1].text,
      chatType
    );

    // setMessages((messages) => [...messages, { text: result, source: "user" }]);

    // setLoading(false);

    onSendMessageButtonClick(result);
  };

  return (
    <>
      <div className="chat" ref={bottomRef}>
        {messages.map((message) => {
          return (
            <ChatMessage
              key={uuidv4()}
              text={message.text}
              source={message.source}
            />
          );
        })}
      </div>
      <div className="u-spacer-vertical-md" />
      <div className="row row--gap-sm row--responsive-lg u-width-full">
        <div className="col-2-of-4 u-flexible-1">
          <input
            type="text"
            className="chat__message-input"
            placeholder={`type something to ${chatType} bot...`}
            onChange={onUserInputChange}
            value={userInput}
          />
        </div>

        <button
          className="chat__button chat__button--send-message"
          onClick={async () => {
            await onSendMessageButtonClick(userInput);
          }}
          disabled={userInput.length === 0 || loading ? true : false}
        >
          Send message
        </button>
        <button
          className="chat__button chat__button--send-message"
          onClick={onThinkForMeButtonClick}
          disabled={loading || messages[messages.length - 1].source === "user"}
        >
          Think for me
        </button>
      </div>
    </>
  );
};

export default Chat;
