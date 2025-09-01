import { prisma } from "@/lib/prisma"

export async function POST(req) {
  const body = await req.json()
  const review = await prisma.review.create({
    data: {
      bookSlug: body.bookSlug,
      author: body.author,
      content: body.content,
    },
  })
  return new Response(JSON.stringify(review), { status: 201 })
}

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get("slug")

  const reviews = await prisma.review.findMany({
    where: { bookSlug: slug },
    orderBy: { createdAt: "desc" },
  })
  return new Response(JSON.stringify(reviews))
}
