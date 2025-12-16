import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-6">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-electric">404</h1>
        <h2 className="mb-6 text-2xl font-semibold text-white">Page Not Found</h2>
        <p className="mb-8 text-concrete">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-sm bg-electric px-6 py-3 font-semibold text-bg transition-all hover:bg-electric/90 hover:shadow-lg hover:shadow-electric/30"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
