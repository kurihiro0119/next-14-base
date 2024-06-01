// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import { Login } from "@/service/login";

const host = process.env.API_HOST;
const path = '/login';
const url = `${host}${path}`
const secret = process.env.SECRET;

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) =>
      {
        // Rails のログインエンドポイントを叩いて JWT を取得
        const user = await Login(res, credentials.username, credentials.password);

        if (res.ok && user)
        {
          // JWT を検証
          const decodedToken = jwt.verify(user.token, secret);
          return { id: decodedToken.id, name: decodedToken.name, email: decodedToken.email };
        } else
        {
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt: async (token, user) =>
    {
      if (user)
      {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    session: async (session, token) =>
    {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    }
  },
  secret: 'your-nextauth-secret',
  session: {
    jwt: true,
  },
  jwt: {
    secret: 'your-jwt-secret',
    encryption: true,
  }
});
