import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql/schemasMap";

const PORT = 4000;

async function startApolloServer() {
  const server = new ApolloServer({ schema });
  const app = express();
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
  });
}

startApolloServer();
