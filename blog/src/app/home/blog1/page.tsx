'use client'

import React from 'react'
import Image from 'next/image'
import CommentSection from '@/components/comments'

const Page = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 space-y-8">
      
      {/* Image Section */}
      <div className="w-full max-w-xl">
        <Image
          src="/first.jpg"
          alt="Next.js Introduction Image"
          width={560}
          height={300}
          className="w-full h-auto rounded-md object-cover"
        />
      </div>
      
      {/* Text Content */}
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-4">What is Next.js</h1>
        <p className="text-lg leading-7 text-gray-700 mb-6">
          Next.js is a powerful <strong>React framework</strong> that simplifies building modern web applications. It is designed to provide a seamless developer experience by offering features like <strong>server-side rendering (SSR)</strong>, <strong>static site generation (SSG)</strong>, and <strong>API routes</strong>—all out of the box. Developed by <strong>Vercel</strong>, Next.js helps developers create fast, scalable, and SEO-friendly websites with minimal configuration.
        </p>
        
        <h1 className="text-3xl font-bold mb-4">Why Use Next.js?</h1>
        <ul className="text-lg leading-7 text-gray-700 mb-6 text-left list-disc list-inside">
          <li><strong>Server-Side Rendering (SSR):</strong> Renders pages on the server before sending them to the browser, improving performance and SEO.</li>
          <li><strong>Static Site Generation (SSG):</strong> Generates HTML at build time for lightning-fast load speeds.</li>
          <li><strong>API Routes:</strong> Build backend APIs directly in the same project, eliminating the need for a separate server.</li>
          <li><strong>Built-in Routing:</strong> File-based routing system makes navigation simple without needing external libraries.</li>
          <li><strong>Optimized Performance:</strong> Automatic image optimization, faster builds, and reduced JavaScript size.</li>
          <li><strong>Flexibility:</strong> Supports both dynamic and static content, making it suitable for a variety of use cases like blogs, e-commerce, and dashboards.</li>
        </ul>

        <h1 className="text-3xl font-bold mb-4">Conclusion</h1>
        <p className="text-lg leading-7 text-gray-700">
          Next.js is the go-to framework for modern web development. Its combination of <strong>simplicity, speed, and scalability</strong> allows developers to build robust applications effortlessly. Whether you’re creating a small personal website or a complex enterprise app, Next.js is an excellent choice.
        </p>
      </div>

      {/* Comment Section */}
      <div className="w-full max-w-3xl">
        <CommentSection />
      </div>
    </div>
  )
}

export default Page
