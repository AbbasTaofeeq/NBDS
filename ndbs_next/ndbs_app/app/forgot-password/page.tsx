"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import LeftPanel from "@/components/LeftPanel";
import MobileHeader from "@/components/MobileHeader";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
    }, 1500);
  };

  return (
    <>
      <MobileHeader />
      <div className="flex h-screen overflow-hidden lg:pt-0 pt-20">
        <LeftPanel
          imageUrl="https://res.cloudinary.com/daqmbfctv/image/upload/q_auto/f_auto/v1775128233/charanjeet-dhiman-mHusyBu4bxM-unsplash_ag2rrl.jpg"
          alt="Customer support"
        />
        {/* Right Panel - Form */}
        <div className="flex-1 flex items-center justify-center overflow-y-auto bg-[#f8f9f8] p-6 sm:p-8 lg:p-12">
          <div className="w-full max-w-[400px]">
            {/* Desktop Logo */}
            <div className="hidden lg:flex justify-center mb-6 mt-4">
              <Logo />
            </div>
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 sm:p-8">
              {!emailSent ? (
                <>
                  <div className="mb-6">
                    <h1 className="text-xl sm:text-2xl font-semibold text-charcoal tracking-tight">
                      Reset Password
                    </h1>
                    <p className="text-charcoal/60 mt-1 text-sm">
                      Enter your email and we&apos;ll send you a reset link
                    </p>
                  </div>
                  <form id="forgot-form" onSubmit={handleSubmit} className="space-y-5">
                    <div className="auth-form-group stagger-1">
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">
                        Email address
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                          required
                          className="w-full h-12 px-4 pl-10 bg-white border border-gray-200 text-charcoal placeholder:text-gray-400 text-sm transition-all duration-200 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(10,107,31,0.12)] focus:-translate-y-0.5"
                        />
                      </div>
                    </div>
                    <div className="auth-form-group stagger-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-medium text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <svg
                            className="animate-spin h-5 w-5 mx-auto"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        ) : (
                          "Send reset link"
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center animate-fade-in">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-charcoal mb-2">
                    Check your email
                  </h2>
                  <p className="text-charcoal/60 text-sm mb-6">
                    We&apos;ve sent a password reset link to your email address.
                  </p>
                  <button
                    onClick={() => setEmailSent(false)}
                    className="text-primary hover:text-primary-dark font-medium text-sm transition-colors"
                  >
                    Resend email
                  </button>
                </div>
              )}
              <div className="mt-6 text-center">
                <p className="text-sm text-charcoal/60">
                  Remember your password?{" "}
                  <Link
                    href="/sign-in"
                    className="text-primary hover:text-primary-dark font-medium transition-colors"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}