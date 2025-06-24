export default function Blogs() {
    return (
        <section className="max-w-4xl mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold mb-8">Blogs</h1>
            <p className="mb-4">Technical blogs and articles (external links):</p>
            <ul className="space-y-3">
                <li>
                    <a href="https://soumyajitblogs.vercel.app/" target="_blank" rel="noopener" className="text-purple-400 hover:underline">
                        My tech blog on Vercel
                    </a>
                </li>
                {/* 你可以继续添加更多博客 */}
            </ul>
        </section>
    )
}
