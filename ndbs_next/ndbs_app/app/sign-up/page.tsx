"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import LeftPanel from "@/components/LeftPanel";
import MobileHeader from "@/components/MobileHeader";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Sign up functionality to be connected to backend");
    }, 1500);
  };

  return (
    <>
      <MobileHeader />
      <div className="flex h-screen overflow-hidden lg:pt-0 pt-20">
        <LeftPanel
          imageUrl="https://res.cloudinary.com/daqmbfctv/image/upload/q_auto/f_auto/v1775128235/annie-spratt-m0DUL38R49Y-unsplash_ufaiho.jpg"
          alt="Annie Spratt"
        />
        {/* Right Panel - Form */}
        <div className="flex-1 flex items-center justify-center overflow-y-auto bg-[#f8f9f8] p-6 sm:p-8 lg:p-12">
          <div className="w-full max-w-2xl">
            {/* Desktop Logo */}
            <div className="hidden lg:flex justify-center mb-6 mt-4">
              <Logo />
            </div>
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 lg:p-8">
              <div className="mb-5">
                <h1 className="text-xl font-semibold text-charcoal tracking-tight">
                  Create an Account
                </h1>
                <p className="text-charcoal/60 mt-1 text-sm">
                  Sign up to get access to the admin dashboard
                </p>
              </div>
              <form id="signup-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="auth-form-group stagger-1">
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      First name
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
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="Enter first name"
                        required
                        className="w-full h-12 px-4 pl-10 bg-white border border-gray-200 text-charcoal placeholder:text-gray-400 text-sm transition-all duration-200 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(10,107,31,0.12)] focus:-translate-y-0.5"
                      />
                    </div>
                  </div>
                  <div className="auth-form-group stagger-2">
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter last name"
                      required
                      className="w-full h-12 px-4 bg-white border border-gray-200 text-charcoal placeholder:text-gray-400 text-sm transition-all duration-200 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(10,107,31,0.12)] focus:-translate-y-0.5"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="auth-form-group stagger-3">
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Choose a username"
                      required
                      className="w-full h-12 px-4 bg-white border border-gray-200 text-charcoal placeholder:text-gray-400 text-sm transition-all duration-200 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(10,107,31,0.12)] focus:-translate-y-0.5"
                    />
                  </div>
                  <div className="auth-form-group stagger-4">
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Phone number
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
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+234 801 234 5678"
                        required
                        className="w-full h-12 px-4 pl-10 bg-white border border-gray-200 text-charcoal placeholder:text-gray-400 text-sm transition-all duration-200 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(10,107,31,0.12)] focus:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </div>
                <div className="auth-form-group stagger-5">
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    className="w-full h-12 px-4 bg-white border border-gray-200 text-charcoal placeholder:text-gray-400 text-sm transition-all duration-200 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(10,107,31,0.12)] focus:-translate-y-0.5"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="auth-form-group stagger-6">
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Min. 8 characters"
                        required
                        minLength={8}
                        className="w-full h-12 px-4 pr-10 bg-white border border-gray-200 text-charcoal placeholder:text-gray-400 text-sm transition-all duration-200 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(10,107,31,0.12)] focus:-translate-y-0.5"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? (
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
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                            />
                          </svg>
                        ) : (
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
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="auth-form-group stagger-7">
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Confirm password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        placeholder="Re-enter password"
                        required
                        minLength={8}
                        className="w-full h-12 px-4 pr-10 bg-white border border-gray-200 text-charcoal placeholder:text-gray-400 text-sm transition-all duration-200 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(10,107,31,0.12)] focus:-translate-y-0.5"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? (
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
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                            />
                          </svg>
                        ) : (
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
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="auth-form-group stagger-7">
                  <button
                    type="submit"
                    id="submit-btn"
                    disabled={isLoading}
                    className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(10,107,31,0.25)] active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed rounded"
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
                      "Create account"
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-gray-500 text-center auth-form-group stagger-7">
                  By creating an account, you agree to our{" "}
                  <a href="#" className="text-primary/70 hover:text-primary">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary/70 hover:text-primary">
                    Privacy Policy
                  </a>
                </p>
              </form>
              <div className="mt-4 text-center auth-form-group stagger-7">
                <p className="text-xs text-gray-500">
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-gray-100 text-center">
              <p className="text-[11px] text-charcoal/40">
                <span className="font-normal">Powered by</span>{" "}
                <span className="font-medium text-charcoal/60">
                  Techspecialist
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}