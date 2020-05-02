/* eslint linebreak-style: ["error", "windows"] */

const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const CategoryType = require('./graphql_category.js');
const product = require('./product.js');

const resolvers = {
  Query: {
    productList: product.list,
    product: product.get,
    productCounts: product.counts,
  },
  Mutation: {
    productAdd: product.add,
    productUpdate: product.update,
    productDelete: product.delete,
  },
  CategoryType,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  resolvers,
});

function installHandler(app) {
  server.applyMiddleware({ app, path: '/graphql' });
}

module.exports = { installHandler };
