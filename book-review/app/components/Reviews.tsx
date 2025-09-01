// components/Reviews.js
"use client"

import { useEffect, useState } from "react"
import type { Review } from "@prisma/client";

type ReviewsProps = {
  slug: string
}



export default function Reviews({ slug }: ReviewsProps) {
 const [reviews, setReviews] = useState<Review[]>([]);
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  // Load reviews on mount
  useEffect(() => {
    fetch(`/api/reviews?slug=${slug}`)
      .then((res) => res.json())
      .then(setReviews)
  }, [slug])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();
    const newReview = { bookSlug: slug, author, content }

    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    })

    if (res.ok) {
      const saved = await res.json()
      setReviews([saved, ...reviews]) // prepend new review
      setAuthor("")
      setContent("")
    }
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Reviews</h2>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name"
          className="border rounded p-2 mr-2"
          required
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write a review"
          className="border rounded p-2 mr-2 w-64"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          Post
        </button>
      </form>

      {/* Review List */}
      <ul>
        {reviews.map((review) => (
          <li key={review.id} className="border-b py-2">
            <p className="font-bold">{review.author}</p>
            <p>{review.content}</p>
            <small className="text-gray-500">
              {new Date(review.createdAt).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  )
}
