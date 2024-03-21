import prisma from "../../../libs/prisma";

export async function GET() {
  const data = await prisma.todo.findMany();

  return Response.json({ data });
}
