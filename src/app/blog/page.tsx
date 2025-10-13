import Link from "next/link"
import AnimatedContainer from "@/components/AnimatedContainer"
import { FaCalendarAlt, FaTag } from "react-icons/fa"

const posts = [
    { slug: 'hello-world', title: "Hello World", excerpt: "My very first blog post!", date: "2025-09-21", tags: ["Intro"] },
    { slug: 'nextjs-is-awesome', title: "Next.js is Awesome", excerpt: "Why Next.js is great for fullstack apps.", date: "2025-09-22", tags: ["Next.js","Fullstack"] },
  ]

export default function BlogPage() {
    return (
        <AnimatedContainer className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Blog</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {posts.map(post => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg shadow hover:shadow-lg transition-all duration-300 cursor-pointer">
                            <h3 className="text-2xl font-semibold mb-2 text-blue-600">{post.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">{post.excerpt}</p>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-4">
                                <div className="flex items-center gap-1"><FaCalendarAlt /> {post.date}</div>
                                <div className="flex items-center gap-1"><FaTag /> {post.tags.join(", ")}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </AnimatedContainer>
    )
}