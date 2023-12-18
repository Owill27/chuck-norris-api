import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import fetch from "node-fetch";

const typeDefs = `#graphql
  type Joke {
    id: ID!
    icon_url: String!
    url: String!
    value: String!
    created_at: String!
    updated_at: String!
    categories: [String]!
  }

  type SearchResults {
    total: Int!
    result: [Joke]!
  }

  type Query {
    getRandomJoke: Joke
    getRandomFromCategory(category: String!): Joke
    getCategories: [String]
    search(query: String!): SearchResults
  }
`;

const resolvers = {
  Query: {
    getRandomJoke: async () => {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/random`
      );
      return response.json();
    },
    getRandomFromCategory: async (_: any, { category }) => {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
      return response.json();
    },
    getCategories: async () => {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/categories"
      );
      return response.json();
    },
    search: async (_: any, { query }) => {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${query}`
      );
      return response.json();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => console.log(`Server ready at: ${url}`));
