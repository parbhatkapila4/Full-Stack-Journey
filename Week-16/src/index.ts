import { Client } from "pg";

const pgClient = new Client(
  "postgresql://neondb_owner:npg_SzDu0b7KERJU@ep-mute-morning-a1lo14r3-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
);
