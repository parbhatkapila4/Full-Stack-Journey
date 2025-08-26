import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient();

app.get("/user", async(req, res) => {
        const users = await client.users.findMany();
        res.json({
            users
        })
})

app.get("/todos/:id", async(req, res ) => {
    const id = req.params.id
        const user = await client.users.findFirst({
            where: {
                id: Number(id)
            },
            select: {
                todo: true,
                username: true,
                password: true
            }
        });
        res.json({
            user
        })
})
app.listen(3000);

async function main() {
  const User = await client.users.findFirst({
    where: {
      id: 1,
    },
    include: {
        todo: true
    }
  });
  console.log(User);
}
main();
