import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
async function main() {
    const User = await client.users.findFirst({
        where: {
            id: 1,
        },
    });
    console.log(User);
}
main();
//# sourceMappingURL=index.js.map