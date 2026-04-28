import Logo from "./Logo";

export default function MobileHeader() {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#f8f9f8] p-4 border-b border-gray-200">
      <Logo />
    </div>
  );
}