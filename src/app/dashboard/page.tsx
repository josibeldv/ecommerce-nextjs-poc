// src/app/cms/dashboard/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;

  console.log("token", token)

  if (!token) redirect("/login");

  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard CMS</h1>
    </main>
  );
}
