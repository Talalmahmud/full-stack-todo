import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const data = await prisma.todo.findMany();

  return Response.json({ data });
}
