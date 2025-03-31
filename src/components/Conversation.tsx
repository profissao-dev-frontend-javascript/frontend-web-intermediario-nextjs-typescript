"use client";

import ConversationForm from "./ConversationForm";

export default function Conversation() {
  const onResponse = (response: []) => {
    console.log(response);
  };

  return (
    <>
      <ConversationForm onResponse={onResponse} />
    </>
  );
}
