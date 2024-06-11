"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation";
import { auth, googleProvider } from "@/components/firebase/firebase";
import { signInWithPopup } from "firebase/auth";

export default function AuthenticationPage() {
  const route = useRouter();
  const signInWithGoogle = async () => {
    console.log("hii");
    await signInWithPopup(auth, googleProvider);
    route.push("/dashboard");
  };
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="  container relative hidden h-screen flex items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/login"
          className={cn(
            // buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className=" pl-40 ">
          <div className="lg:p-8 ">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email below to create your account
                </p>
              </div>
              {/* <UserAuthForm /> */}
              <button
                onClick={() => signInWithGoogle()}
                className="bg-indigo-500 text-white text-xl"
              >
                Login with Gmail
              </button>
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
