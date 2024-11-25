import Link from 'next/link'
import { Blog } from '../data/blogs'

interface BlogPreviewProps {
  blog: Blog
}

export default function BlogPreview({ blog }: BlogPreviewProps) {
  return (
    <div className="bg-[#1A1721]/80 border border-white/10 rounded-lg overflow-hidden h-full flex flex-col relative">
      <div 
        className="h-2 w-full absolute top-0 left-0" 
        style={{ backgroundColor: blog.color }}
      />
      <div className="p-6 flex-grow flex flex-col">
        <h2 className="font-mono text-[#DCB8B0] text-xl mb-2 font-bold">
          <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
        </h2>
        <p className="text-[#D2D2D4] text-sm mb-4 flex-grow">{blog.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#1E1E1E] border border-[#333333] rounded text-xs font-mono text-[#D2D2D4]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D2D2D4]" />
              {tag}
            </span>
          ))}
        </div>
        <p className="text-[#D2D2D4] text-xs">{blog.date}</p>
      </div>
    </div>
  )
}