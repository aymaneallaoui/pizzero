// seed.js

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    // Create some users
    const user1 = await prisma.user.create({
      data: {
        email: "user1@example.com",
        name: "User 1",
        phone: "123-456-7890",
        address: "123 Main St, City, Country",
      },
    });

    const user2 = await prisma.user.create({
      data: {
        email: "user2@example.com",
        name: "User 2",
        phone: "987-654-3210",
        address: "456 Oak St, City, Country",
      },
    });

    // Create some toppings
    const topping1 = await prisma.topping.create({
      data: {
        name: "Mushrooms",
        price: 1.5,
      },
    });

    const topping2 = await prisma.topping.create({
      data: {
        name: "Pepperoni",
        price: 2.0,
      },
    });

    // Create some pizzas with toppings
    const pizza1 = await prisma.pizza.create({
      data: {
        name: "Margherita",
        price: 10.0,
        toppings: {
          create: [
            {
              topping: {
                connect: { id: topping1.id },
              },
            },
          ],
        },
      },
    });

    const pizza2 = await prisma.pizza.create({
      data: {
        name: "Pepperoni Deluxe",
        price: 12.0,
        toppings: {
          create: [
            {
              topping: {
                connect: { id: topping1.id },
              },
            },
            {
              topping: {
                connect: { id: topping2.id },
              },
            },
          ],
        },
      },
    });

    // Create an order for a user with pizzas
    const order = await prisma.order.create({
      data: {
        userId: user1.id,
        pizzas: {
          connect: [{ id: pizza1.id }, { id: pizza2.id }],
        },
        totalAmount: pizza1.price + pizza2.price,
      },
    });

    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
