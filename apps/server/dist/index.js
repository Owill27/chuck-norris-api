import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import fetch from 'node-fetch';
const typeDefs = `#graphql
  type Joke {
    id: ID!
    icon_url: String!
    url: String!
    value: String!
    created_at: String!
    updated_at: String!
    categories: [String!]!
  }

  type SearchResults {
    total: Int!
    result: [Joke]!
  }

  type Query {
    getRandomJoke: Joke!
    getRandomFromCategory(category: String!, timestamp: String): Joke
    getCategories: [String!]
    search(query: String!): SearchResults!
  }
`;
const BASE_URL = 'https://api.chucknorris.io';
function getFullLink(path) {
    return `${BASE_URL}${path}`;
}
const resolvers = {
    Query: {
        /**
         * Fetch a random joke
         * @returns Joke
         */
        getRandomJoke: async () => {
            const response = await fetch(getFullLink('/jokes/random'));
            return response.json();
        },
        /**
         * Fetch a random joke from the given category
         * @param _ Request data
         * @param param1 variables
         * @returns Joke
         */
        getRandomFromCategory: async (_, { category }) => {
            const response = await fetch(getFullLink(`/jokes/random?category=${category}`));
            const body = (await response.json());
            if (body.status) {
                throw new Error(body.message);
            }
            else {
                return body;
            }
        },
        /**
         * Fetch a list of all available categories
         * @returns List of categories
         */
        getCategories: async () => {
            const response = await fetch(getFullLink('/jokes/categories'));
            return response.json();
        },
        /**
         * Search for jokes matching the passed in keyword
         * @param _ Request data
         * @param param1 Variables
         * @returns Search results, with count and list of jokes
         */
        search: async (_, { query }) => {
            const response = await fetch(getFullLink(`/jokes/search?query=${query}`));
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
