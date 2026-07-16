import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { title, description, filename } = body;

    if (!title || !filename) {
      return new NextResponse("Missing title or filename", { status: 400 });
    }

    // Find user from database
    const user = await db.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Create video in DB
    const video = await db.video.create({
      data: {
        title,
        description,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumbnailUrl: `https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80`,
        duration: "9:56",
        userId: user.id,
      }
    });

    return NextResponse.json(video);
  } catch (error) {
    console.error("[VIDEOS_POST_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
