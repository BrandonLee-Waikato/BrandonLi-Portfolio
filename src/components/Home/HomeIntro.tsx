export default function HomeIntro() {
    return (
        <div className="max-w-4xl mx-auto mt-16 px-6 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">
                Let me <span className="text-purple-400">introduce</span> myself
            </h2>
            <p className="text-lg leading-relaxed text-gray-200">
                I enjoy building scalable web apps, cloud infrastructure, and developer tools.
                <br />
                <br />
                My current focus includes <span className="text-purple-300">Rust</span>, <span className="text-purple-300">Next.js</span>, and{" "}
                <span className="text-purple-300">Cloud DevOps</span> tools like Docker, MinIO, and Azure Pipelines.
            </p>
        </div>
    )
}
