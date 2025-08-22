import { Client } from "pg";
const pgClient = new Client({
    user: "neondb_owner",
    password: "npg_SzDu0b7KERJU",
    port: 5432,
    host: "ep-mute-morning-a1lo14r3-pooler.ap-southeast-1.aws.neon.tech",
    database: "neondb",
    ssl: true,
});
async function main() {
    await pgClient.connect();
    const response = await pgClient.query("UPDATE users SET username='punyakrit' WHERE id = 8");
    console.log(response.rows);
}
main();
//# sourceMappingURL=index.js.map