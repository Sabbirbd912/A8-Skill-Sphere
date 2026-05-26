import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-gray-50 via-white to-gray-100 px-4">
            <div className="text-center max-w-md">

                <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight">
                    4 <span className="text-red-500 animate-caret-blink">0</span> 4
                </h1>

                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                    Page Not Found
                </h2>
                <p className="mt-3 text-gray-500 leading-relaxed">
                    Oops! The page you are looking for doesn’t exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="inline-block mt-6 px-4 py-2 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                    Return Home
                </Link>
                <p className="mt-6 text-sm text-gray-400">
                    If you think this is a mistake, check the URL or go back to homepage.
                </p>
            </div>
        </div>
    )
}