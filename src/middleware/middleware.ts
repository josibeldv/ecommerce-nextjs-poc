import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    // Redirige al login si no hay token
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Configuración de rutas que aplica el middleware
export const config = {
  matcher: ["/dashboard/:path*"],
};
