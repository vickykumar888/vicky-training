"use client";
import { auth } from "@/components/firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardNavBar({ children }) {
  const route = useRouter();

  const signOutWithGoogle = async () => {
    console.log("hii");
    await signOut(auth);
    route.push("/");
  };

  return (
    <div>
      <div className=" w-screen  flex justify-between p-5 bg-indigo-500 text-white ">
        <Link href="/dashboard">DashBoard</Link>

        <Link href="/dashboard/cards">Cards</Link>

        <Link href="/dashboard/Tasks">Tasks</Link>

        <Link href="/dashboard/Playground">Playground</Link>

        <Link href="/dashboard/Forms">Forms</Link>

        <Link href="/dashboard/Music">Music</Link>
        <button onClick={() => signOutWithGoogle()}>LogOut</button>
      </div>
      -{children}
    </div>
  );
}
