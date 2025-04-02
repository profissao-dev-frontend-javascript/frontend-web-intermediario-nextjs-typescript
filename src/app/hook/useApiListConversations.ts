"use client";

import { useEffect, useState } from "react";
import { ConversationDomain } from "../api/_domain/ConversationDomain";

export default function useApiListConversations() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [conversationList, setConversationList] = useState<
    ConversationDomain[]
  >([]);

  async function loadConversation() {
    setIsLoading(true);

    const response = await fetch("/api/conversation", { method: "GET" });

    if (response.status === 200) {
      const data: ConversationDomain[] = await response.json();
      //   console.log({ data });

      setConversationList(data);
    } else {
      // TODO: Implement toastify to show a beautiful error message
      alert(
        "Ocorreu um erro na listagem de conversations. Tente novamente mais tarde."
      );
    }

    setIsLoading(false);
  }

  useEffect(() => {
    loadConversation();
  }, []);

  return { isLoading, data: conversationList };
}
