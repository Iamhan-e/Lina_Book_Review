import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/reviews?slug=book-slug
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const reviews = await prisma.review.findMany({
    where: { bookSlug: slug },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(reviews);
}

// POST /api/reviews
export async function POST(request: Request) {
  const body = await request.json();
  const { author, content, bookSlug } = body;

  if (!author || !content || !bookSlug) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const review = await prisma.review.create({
    data: { author, content, bookSlug },
  });

  return NextResponse.json(review);
}
