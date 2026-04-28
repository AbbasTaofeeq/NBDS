import Logo from "@/components/Logo";
import LeftPanel from "@/components/LeftPanel";
import MobileHeader from "@/components/MobileHeader";

export default function SignInPage() {
  return (
    <>
      <MobileHeader />
      <div className="flex h-screen overflow-hidden lg:pt-0 pt-20">
        <LeftPanel
          imageUrl="https://res.cloudinary.com/daqmbfctv/image/upload/q_auto/f_auto/v1775128237/osarugue-igbinoba-1YEsM_v9t4c-unsplash_t0pzyx.jpg"
          alt="African community"
        />
        {/* Right Panel - Form */}
        <div className="flex-1 flex items-center justify-center overflow-y-auto bg-[#f8f9f8] p-6 sm:p-8 lg:p-12">
          <div className="w-full max-w-[400px]">
            {/* Desktop Logo */}
            <div className="hidden lg:flex justify-center mb-6 mt-4">
              <Logo />
            </div>
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 sm:p-8">
              <div className="mb-6">
                <h1 className="text-xl sm:text-2xl font-semibold text-charcoal tracking-tight">
                  Welcome back
                </h1>
                <p className="text-charcoal/60 mt-1 text-sm">
                  Sign in to get access to the admin dashboard
                </p>
              </div>
              <form id="signin-form" className="space-y-5">
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
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    Password
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
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      required
                      className="w-full h-12 px-4 pl-10 bg-white border border-gray-200 text-charcoal placeholder:text-gray-400 text-sm transition-all duration-200 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(10,107,31,0.12)] focus:-translate-y-0.5"
                    />
                  </div>
                </div>
                <div className="auth-form-group stagger-3 flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-xs text-gray-600">Remember me</span>
                  </label>
                  <a
                    href="/forgot-password"
                    className="text-xs text-primary hover:text-primary-dark transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="auth-form-group stagger-4">
                  <button
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-medium text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-charcoal/60">
                  Don&apos;t have an account?{" "}
                  <a
                    href="/sign-up"
                    className="text-primary hover:text-primary-dark font-medium transition-colors"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}