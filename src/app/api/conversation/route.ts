import { NextRequest, NextResponse } from "next/server";

export interface UpsertConversationDto {
  id?: string;
  input: string;
}

export async function POST(request: NextRequest): Promise<NextResponse<[]>> {
  const data = await request.formData();
  const [firstEntry] = data.entries();

  const input = firstEntry[1].toString();

  const dto: UpsertConversationDto = {
    input,
  };

  try {
    const url = `http://localhost:3333/conversation`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    throw new Error("Falha na busca, tente novamente.");
  }
}
