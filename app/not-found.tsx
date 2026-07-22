import Link from 'next/link';
import { FaHome, FaFolderOpen } from 'react-icons/fa';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="p-4 bg-purple/10 border border-purple/30 rounded-full text-purple font-mono text-sm mb-6">
        404 — Page Not Found
      </div>
      <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
        Lost in the Cloud?
      </h1>
      <p className="text-white/60 max-w-md mb-8 text-base">
        The requested resource does not exist or has been relocated. You can navigate back to the portfolio home or view case studies.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple text-white font-medium rounded-lg hover:bg-purple/90 transition-all duration-200"
        >
          <FaHome /> Return Home
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
        >
          <FaFolderOpen /> View Projects
        </Link>
      </div>
    </main>
  );
}
