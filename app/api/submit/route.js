import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { name, email, address, phone, pizza, topping } =
      await request.json();

    // Convert pizza and topping to integers
    const pizzaId = parseInt(pizza);
    const toppingId = topping ? parseInt(topping) : null;

    // Get the pizza and topping details from the database based on the IDs
    const pizzaDetails = await prisma.pizza.findUnique({
      where: { id: pizzaId },
    });
    const toppingDetails = toppingId
      ? await prisma.topping.findUnique({
          where: { id: toppingId },
        })
      : null;

    if (!pizzaDetails) {
      return new NextResponse(JSON.stringify({ error: "Pizza not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Calculate the total amount based on the pizza and topping prices
    const totalAmount = toppingDetails
      ? pizzaDetails.price + toppingDetails.price
      : pizzaDetails.price;

    // Save the form submission to the database
    const submission = await prisma.order.create({
      data: {
        pizzas: { connect: { id: pizzaDetails.id } },
        user: {
          create: {
            name,
            email,
            address,
            phone,
          },
        },
        totalAmount,
      },
    });

    console.log("New submission saved to database:", submission);

    return new NextResponse(JSON.stringify({ submission }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error submitting order form:", error);
    return new NextResponse(null, { status: 500 });
  }
}
