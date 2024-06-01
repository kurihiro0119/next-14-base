// import type { NextAuthOptions } from 'next-auth';
// import CredentialsProvider from "next-auth/providers/credentials";
// import { Login, Credential } from '@/service/login';
// import jwt from "jsonwebtoken";

// type User = {
//   user_id: number;
//   alg: string;
// }

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       authorize: async (credentials) => {
//         if (!credentials) {
//           return null;
//         }
        
//         const cred: Credential = {
//           username: credentials.username,
//           password: credentials.password
//         };

//         try {
//           const token = await Login(cred);
//           const secret = process.env.JWT_SECRET;

//           if (!secret) {
//             throw new Error('JWT secret is not defined');
//           }

//           const decodedToken = jwt.verify(token.token, secret) as User;
//           return { id: decodedToken.user_id, name: credentials.username, email: credentials.username };
//         } catch (error) {
//           console.error('Authentication error:', error);
//           return null;
//         }
//       }
//     })
//   ],
//   callbacks: {
//     jwt: async (token, user) => {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     session: async (session, token) => {
//       session.user.id = token.id;
//       return session;
//     }
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     jwt: true,
//   },
//   jwt: {
//     secret: process.env.JWT_SECRET,
//     encryption: true,
//   }
// };