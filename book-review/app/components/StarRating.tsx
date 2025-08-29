"use client";
import { useState } from "react";
import { Star } from "lucide-react";

type StarRatingProps = {
  initial?: number;   // default rating
  max?: number;       // how many stars (default 5)
  onChange?: (value: number) => void;
};

export default function StarRating({ initial = 0, max = 5, onChange }: StarRatingProps) {
  const [rating, setRating] = useState(initial);
  const [hover, setHover] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }, (_, i) => {
        const value = i + 1;
        return (
          <Star
            key={value}
            className={`w-5 h-5 cursor-pointer transition 
              ${value <= (hover || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
            onClick={() => handleClick(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
          />
        );
      })}
    </div>
  );
}
