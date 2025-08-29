"use client";

import { useState } from "react";
import { Star } from "lucide-react";

type StarRatingProps = {
  initial?: number; // initial rating (1-5)
};

export default function StarRating({ initial = 0 }: StarRatingProps) {
  const [rating, setRating] = useState(initial);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => {
        const isActive = i <= (hover || rating);
        return (
          <Star
            key={i}
            className={`w-5 h-5 cursor-pointer transition ${
              isActive
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
            onClick={() => setRating(i)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(0)}
          />
        );
      })}
    </div>
  );
}
