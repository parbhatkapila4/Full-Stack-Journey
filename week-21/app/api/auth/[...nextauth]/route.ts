import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Login With Email",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "parbhat@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
       const username = credentials?.username;
       const password = credentials?.password


       const user = {
        name: "parbhat",
        id: "1",
        username: "parbhatkapila4@gmail.com"
       }
       if(user){
        return user;
       }else{
        return null;
       }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
