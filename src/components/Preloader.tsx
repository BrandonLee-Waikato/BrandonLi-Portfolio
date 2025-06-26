'use client'

export default function Preloader({ show }: { show: boolean }) {
    if (!show) return null
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-700">
            <div className="flex flex-col items-center gap-4">
                <svg className="w-16 h-16 animate-spin text-green-400" viewBox="0 0 24 24" fill="none">
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                    />
                </svg>
                <div className="text-green-300 text-xl font-bold animate-pulse">Loading...</div>
            </div>
        </div>
    )
}
