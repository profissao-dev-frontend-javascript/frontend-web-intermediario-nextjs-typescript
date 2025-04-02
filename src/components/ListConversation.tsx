import useApiListConversations from "@/app/hook/useApiListConversations";

export default function ListConversation() {
  const { isLoading, data: conversationList } = useApiListConversations();

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
