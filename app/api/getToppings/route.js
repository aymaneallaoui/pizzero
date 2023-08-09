import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const Topping = await prisma.Topping.findMany();
    return NextResponse.json(Topping, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching pizzas" },
      { status: 500 }
    );
  }
}
