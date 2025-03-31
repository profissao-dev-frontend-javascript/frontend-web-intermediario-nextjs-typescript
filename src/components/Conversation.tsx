"use client";

import { ConversationDomain } from "@/app/api/conversation/route";
import ConversationForm from "./ConversationForm";

export default function Conversation() {
  const onResponse = (response: ConversationDomain) => {
    console.log(response);
  };

  return (
    <>
      <ConversationForm onResponse={onResponse} />
    </>
  );
}
