'use client'

import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() === "") return;

    // Add the new comment to the list
    setComments((prevComments) => [...prevComments, comment.trim()]);
    setComment(""); // Clear the input field
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>

      {/* Comment Form */}
      <form
        onSubmit={handleCommentSubmit}
        className="flex flex-col md:flex-row gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Write your comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      {/* Comment List */}
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="text-lg font-medium mb-3">Comments</h3>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        ) : (
          <ul className="space-y-3">
            {comments.map((cmt, index) => (
              <li
                key={index}
                className="bg-white p-3 rounded-md shadow-sm border border-gray-200"
              >
                {cmt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
