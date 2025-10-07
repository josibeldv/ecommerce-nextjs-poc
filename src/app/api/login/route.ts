import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password, idApp, userSessionInformation } = await req.json();

  // Llamada directa al backend Java
  const backendRes = await fetch(`http://10.192.98.160:3053/iam-service/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, idApp, userSessionInformation }),
  });

  const data = await backendRes.json();

    console.log("data backend", data)

  if (!backendRes.ok) {
    return NextResponse.json({ error: data.error || "Error de login" }, { status: 400 });
  }



  // Guardar token en cookie segura HttpOnly
  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: "authToken",
    value: data.responseInfo.authorization, // suponiendo que tu backend devuelve { token: "..." }
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 día
  });

  return response;
}
