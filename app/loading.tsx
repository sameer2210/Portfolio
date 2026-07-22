export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-purple border-t-transparent rounded-full animate-spin" />
        <p className="text-white/40 text-xs font-mono tracking-widest uppercase">
          Loading Sameer Khan Portfolio...
        </p>
      </div>
    </div>
  );
}
