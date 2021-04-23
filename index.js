const {ApolloServer, gql} = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  input UserInput {
    email: String
    password: String
  }
  type Order {
    id: ID,
    itemId: String
    userId: String
  }
  type User {
    id: ID
    name: String
    email: String
  }
  type Query {
    users: [User]
  }
  type Mutation {
    addUser(user: UserInput): User 
    addOrder(itemId: ID): Order
  }
`;

const users = [];
const orders = [];

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        users: async () => {
            return users;
        },
    },
    Mutation: {
        addUser: async (parent, {user}, context) => {
            const newUser = {...user, id: users.length};
            users.push(newUser);
            return newUser;
        },
        addOrder: async (parent, {itemId}, context) => {
            const newOrder = {id: orders.length, userId: context.session.id, itemId};
            orders.push(newOrder);
            return newOrder;
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
        return {session: {id: 1}};
    },
});

server.listen({port: 4001}).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});