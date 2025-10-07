import Providers from "@/components/ProviderWrapper";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Tienda Digitel",
  description: "Compra planes, equipos y servicios Digitel fácilmente",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
