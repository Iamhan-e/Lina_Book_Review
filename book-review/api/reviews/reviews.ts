import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { author, content, bookSlug } = req.body;

    if (!author || !content || !bookSlug) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const review = await prisma.review.create({
      data: { author, content, bookSlug },
    });

    return res.status(201).json(review);
  }

  if (req.method === "GET") {
    const { bookSlug } = req.query;

    if (!bookSlug || typeof bookSlug !== "string") {
      return res.status(400).json({ error: "Missing book slug" });
    }

    const reviews = await prisma.review.findMany({
      where: { bookSlug },
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json(reviews);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
