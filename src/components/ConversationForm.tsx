import { ConversationDomain } from "@/app/api/_domain/ConversationDomain";
import { FormEvent, useState } from "react";

interface ConversationFormProps {
  // TODO: Desafio: Implementar função `onStart`
  onResponse: (response: ConversationDomain) => void;
}

export default function ConversationForm(props: ConversationFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/conversation", {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      const data: ConversationDomain = await response.json();
      console.log({ data });

      props.onResponse(data);
    } else {
      // TODO: Implement toastify to show a beautiful error message
      alert(
        "Ocorreu um erro na criação da conversation. Tente novamente mais tarde."
      );
    }

    setIsLoading(false);
  }

  return (
    <form className="flex gap-2 text-black w-full" onSubmit={onSubmit}>
      <textarea
        name="input"
        data-test="input"
        placeholder="Ask a technical question"
        className="border-2 border-gray-300 px-2 py-1 w-full rounded-lg min-h-12 max-h-48"
        disabled={isLoading}
      />

      <input
        type="submit"
        data-test="user_submit"
        className="bg-indigo-500 text-white px-4 rounded-lg hover:bg-indigo-400 cursor-pointer"
        value={isLoading ? "Loading..." : "Ask"}
        disabled={isLoading}
      />
    </form>
  );
}
