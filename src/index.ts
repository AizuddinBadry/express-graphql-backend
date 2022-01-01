import express from "express";
import { ApolloServer } from "apollo-server-express";
import { Model } from "objection";
import cors from "cors";

import schema from "./graphql/schemasMap";
import query from "../src/db/connection";

const PORT = 4000;

async function startApolloServer() {
  const server = new ApolloServer({ schema });
  const app = express();
  app.use(cors());
  await server.start();
  Model.knex(query);
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
  });
}

startApolloServer();
