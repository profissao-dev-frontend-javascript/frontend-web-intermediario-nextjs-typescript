import { ConversationStatus } from "./ConversationStatus";

export interface ConversationDomain {
  id: string;
  input: string;
  response: string | null;
  respondedAt: Date | null;
  status: ConversationStatus;
  conversationId: string;
}
