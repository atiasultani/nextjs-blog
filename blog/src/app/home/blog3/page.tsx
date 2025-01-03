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
          src="/third.jpg"
          alt="Next.js Introduction Image"
          width={560}
          height={300}
          className="w-full h-auto rounded-md object-cover"
        />
      </div>
      
      {/* Text Content */}
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-4">Next.js15</h1>
        <p className="text-lg leading-7 text-gray-700 mb-6">
        Next.js 15 released in October 2024 introduces several enhancements aimed at improving performance developer experience and compatibility with the latest React features. Here is an overview of the key updates

        </p>
        
        <h1 className="text-3xl font-bold mb-4">Why Use Next.js15?</h1>
        <ul className="text-lg leading-7 text-gray-700 mb-6 text-left list-disc list-inside">
          <li><strong>React 19 Support:</strong> 
          Next.js 15 fully supports React 19, enabling developers to utilize new hooks and features introduced in this React version. This integration enhances state management and UI interactions within Next.js applications.</li>
          <li><strong>Caching Improvements:</strong> The default caching behavior has been updated:

- **`GET` Route Handlers**: These are no longer cached by default, providing developers with more control over data fetching strategies. 

- **Client Router Cache**: Page components are now uncached by default during client-side navigation, ensuring that users receive the most up-to-date content. 
.</li>
          <li><strong>Turbopack in Development (Stable):</strong>
          Turbopack, a new bundler introduced to enhance development performance, has reached a stable release in Next.js 15. It offers faster builds and improved module processing, significantly boosting the development workflow.</li>
          <li><strong>Async Request APIs:</strong>
          As part of a move towards a simplified rendering and caching model, Next.js 15 introduces asynchronous request APIs. This change requires developers to adapt their data fetching methods to align with the new asynchronous patterns.</li>
          <li><strong>Improved Error Debugging:</strong>
          Enhancements in error handling provide more informative messages and debugging tools, aiding developers in identifying and resolving issues more efficiently.
          </li>
          <li><strong>New Experimental Authorization APIs:</strong> 
          Next.js 15.1 introduces experimental authorization APIs, offering developers new tools to manage authentication and authorization within their applications.</li>
        </ul>

        <h1 className="text-3xl font-bold mb-4">Conclusion</h1>
        <p className="text-lg leading-7 text-gray-700">
{`Next.js 15 solidifies its position as a leading framework for modern web development by integrating cutting-edge technologies and enhancing the developer experience. The stable release of Turbopack React 19 support and significant caching improvements empower developers to build faster, more efficient applications. With a focus on performance and flexibility, Next.js 15 makes creating dynamic, SEO-friendly, and scalable applications more accessible than ever. While some features, like async request APIs, may require adaptation, these changes pave the way for a simplified and robust development ecosystem. Whether you're building enterprise-level solutions or personal projects, Next.js 15 continues to be a go-to framework for the future of web development.`}</p>
      </div>

      {/* Comment Section */}
      <div className="w-full max-w-3xl">
        <CommentSection />
      </div>
    </div>
  )
}

export default Page
