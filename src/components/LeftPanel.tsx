interface LeftPanelProps {
  imageUrl: string;
  alt: string;
}

export default function LeftPanel({ imageUrl, alt }: LeftPanelProps) {
  return (
    <div className="hidden lg:flex lg:w-[45%] xl:w-[48%] relative">
      <img
        src={imageUrl}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary-dark/60 to-[#041a08]" />
      <div className="relative z-10 h-full flex flex-col p-10 xl:p-14">
        <div className="flex-1 flex flex-col max-w-lg">
          <div className="flex items-center gap-3 text-white/40 text-xs mb-6">
            <img
              src="https://res.cloudinary.com/daqmbfctv/image/upload/q_auto/f_auto/v1772714010/logo.jpg_i1jmtu.jpg"
              alt="NCTO Logo"
              className="w-10 h-10 object-contain rounded-full"
            />
            <p className="text-white/50 font-extrabold">
              The National Cash Transfer Office (NCTO)
            </p>
          </div>
          <div className="bg-white/10 rounded-lg py-4 px-4 backdrop-blur-lg mb-2 border border-white/20 mt-auto">
            <h2 className="text-white text-xl xl:text-xl font-bold leading-tight tracking-tight">
              Transforming Lives,
              <br />
              One Household at a Time
            </h2>
            <p className="text-white/75 text-[11px] mt-3 leading-relaxed">
              An evolving and innovative delivery platform for nationwide social
              and humanitarian assistance to improve lives of vulnerable
              Nigerians.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}