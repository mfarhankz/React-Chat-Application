import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from "@/components/header";
import StandardMessageForm from "../customMessageForms/StandardMessageForm";

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "mFarhankz",
    "1234"
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100%" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  );
};

export default Chat;
