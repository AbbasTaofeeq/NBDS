import Link from "next/link";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = "", showTagline = true }: LogoProps) {
  return (
    <Link href="/sign-in" className={`flex items-center gap-3 ${className}`}>
      <img
        src="https://res.cloudinary.com/daqmbfctv/image/upload/v1777298008/NBDS-Logo_uwd01j.png"
        alt="NBDS Logo"
        className="w-11 h-11 object-contain rounded-full"
      />
      <div className="text-charcoal text-left">
        <span className="text-xl font-bold">NBDS</span>
        {showTagline && (
          <span className="block text-[11px] text-charcoal/60">
            National Benefits Delivery System
          </span>
        )}
      </div>
    </Link>
  );
}