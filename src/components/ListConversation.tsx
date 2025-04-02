import { ConversationDomain } from "@/app/api/_domain/ConversationDomain";
import { useEffect, useState } from "react";

export default function ListConversation() {
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

  if (isLoading) {
    return <div>Loading conversation list...</div>;
  }

  return (
    <div className="w-full mb-8">
      <b>Last Conversations:</b>
      {conversationList.map((conversation, index) => (
        <div
          key={`conversation_list_${index}`}
          className="border m-1 p-1 w-full"
        >
          {conversation.input}
        </div>
      ))}
    </div>
  );
}
