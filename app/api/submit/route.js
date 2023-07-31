import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { name, email, phone, pizza } = await request.json();

    // Save the form submission to the database
    const submission = await prisma.Order.create({
      data: {
        name,
        email,
        phone,
        pizza,
      },
    });

    console.log("New submission saved to database:", submission);

    return new NextResponse(JSON.stringify({ submission }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return new NextResponse(null, { status: 500 });
  }
}
