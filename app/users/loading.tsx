"use client";

export default function LoadingState() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 relative overflow-hidden text-gray-100">
      {/* 🔹 Glowing background for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-blue-400/10 to-indigo-700/20 blur-3xl"></div>

      {/* 🔹 Frosted glass center card */}
      <div className="relative z-10 max-w-lg w-full bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 flex flex-col items-center justify-center p-10 text-center">
        {/* 🔹 Animated GIF */}
        <img
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*lGuwWl2fkpt4sNSn3rMreQ.gif"
          alt="Loading animation"
          className="w-32 h-32 mb-6 drop-shadow-lg animate-bounce"
        />

        {/* 🔹 Title */}
        <h2 className="text-3xl font-extrabold text-indigo-100 mb-3 drop-shadow-sm">
          Loading User...
        </h2>

        {/* 🔹 Subtext */}
        <p className="text-indigo-200 max-w-sm animate-pulse">
          Please wait while we fetch the user data for you.
        </p>

        {/* 🔹 Subtle progress bar */}
        <div className="w-48 h-2 bg-white/20 rounded-full mt-8 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-[progress_2s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* 🔹 Floating soft blue glow orbs */}
      <div className="absolute top-10 left-16 w-24 h-24 bg-indigo-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-300"></div>

      {/* 🔹 Keyframes for progress bar */}
      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          50% {
            width: 80%;
          }
          100% {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
}
