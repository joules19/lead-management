"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/login/login-form";
import { useAuth } from "@/lib/hooks/use-auth";

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nexcell-pink-pale via-white to-nexcell-pink-light p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="/nexcell-logo.png"
              alt="NexCell Solutions"
              className="h-16 w-16"
            />
            <span className="font-bold text-3xl text-nexcell-burgundy-700">
              NexCell Solutions
            </span>
          </div>
          <p className="text-gray-600 text-lg">Lead Management Dashboard</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
