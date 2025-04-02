import { NextRequest, NextResponse } from "next/server";

export interface UpsertConversationDto {
  id?: string;
  input: string;
}

export enum ConversationStatus {
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
}

export interface ConversationDomain {
  id: string;
  input: string;
  response: string | null;
  respondedAt: Date | null;
  status: ConversationStatus;
  conversationId: string;
}

export async function GET(): Promise<NextResponse<ConversationDomain[]>> {
  try {
    const backendApiUrl = process.env.BACKEND_API_URL;
    const url = `${backendApiUrl}/conversation`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result: ConversationDomain[] = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    throw new Error("Falha na busca, tente novamente.");
  }
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<ConversationDomain>> {
  const data = await request.formData();
  const [firstEntry] = data.entries();

  const input = firstEntry[1].toString();

  const dto: UpsertConversationDto = {
    input,
  };

  try {
    const backendApiUrl = process.env.BACKEND_API_URL;
    const url = `${backendApiUrl}/conversation`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });

    const result: ConversationDomain = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    throw new Error("Falha na busca, tente novamente.");
  }
}
