"use client";

import { ConversationDomain } from "@/app/api/conversation/route";
import ConversationForm from "./ConversationForm";
import { useState } from "react";
import Markdown from "react-markdown";

export default function Conversation() {
  const [conversationDomain, setConversationDomain] =
    useState<ConversationDomain>();

  const onResponse = (data: ConversationDomain) => {
    setConversationDomain(data);
  };

  return (
    <>
      <ConversationForm onResponse={onResponse} />

      {conversationDomain && (
        <div className="my-2 py-2 px-1 bg-gray-100 w-full text-left">
          <h3 className="font-bold text-md pb-2">Resposta:</h3>

          <div>
            <Markdown>{conversationDomain.response}</Markdown>
          </div>
        </div>
      )}
    </>
  );
}
