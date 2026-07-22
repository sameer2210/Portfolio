'use client';

import { useEffect } from 'react';
import { FaRedo } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled portfolio application error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 font-mono text-sm mb-6">
        500 — Application Error
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
        Something Went Wrong
      </h1>
      <p className="text-white/60 max-w-md mb-8 text-base">
        An unexpected runtime error occurred. You can attempt to reload the view.
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 px-6 py-3 bg-purple text-white font-medium rounded-lg hover:bg-purple/90 transition-all duration-200"
      >
        <FaRedo /> Try Again
      </button>
    </main>
  );
}
