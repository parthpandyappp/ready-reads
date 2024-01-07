// server/schema.js
const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    readingLists: [ReadingList]
  }

  type ReadingList {
    _id: ID!
    userId: ID!
    title: String!
    category: String!
    links: [String]
  }

  type Query {
    getUser(username: String!): User
    getReadingList(userId: ID!, title: String!): ReadingList
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createReadingList(
      userId: ID!
      title: String!
      category: String!
    ): ReadingList
    addLink(readingListId: ID!, link: String!): ReadingList
  }
`;

module.exports = typeDefs;
