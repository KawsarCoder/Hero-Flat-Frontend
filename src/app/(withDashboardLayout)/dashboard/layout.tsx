"use client";

import { isLoggedIn } from "@/services/auth-services";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const DashboardComponent = dynamic(
    () => import("@/components/Dashboard/DashboardDrawer/DashboardDrawer"),
    { ssr: false }
  );
  const router = useRouter();
  if (!isLoggedIn()) {
    router.push("/");
  }
  return <DashboardComponent>{children}</DashboardComponent>;
}
