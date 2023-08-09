import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const pizzas = await prisma.pizza.findMany();
    return NextResponse.json(pizzas, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching pizzas" },
      { status: 500 }
    );
  }
}
