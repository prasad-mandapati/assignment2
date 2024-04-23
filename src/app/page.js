import UserLayout from "@/components/userProfile/UserLayout";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex lg:h-screen items-center justify-between px-2 py-4 md:p-24">
      <UserLayout/>
    </main>
  );
}
