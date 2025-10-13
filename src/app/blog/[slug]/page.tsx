interface BlogPageProps {
    params: { slug: string }
}

export default function BlogPost({ params }: BlogPageProps) {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h1 className="text-4xl font-bold mb-4 text-blue-600">{params.slug.replace(/-/g, " ")}</h1>
                <p className="text-gray-500 mb-6">Posted on September 21, 2025</p>

                <div className="prose dark:prose-invert max-w-none text-gray-700">
                    <p>
                        This is a placeholder for the blog post content. Later, we’ll fetch the content from a database or Markdown file.
                    </p>
                    <p>
                        You can include headings, images, code blocks, or anything you want here.
                    </p>
                    <p>
                        The layout is responsive, and the card has shadow and rounded corners for a modern look.
                    </p>
                </div>
            </div>
        </div>
    )
}
