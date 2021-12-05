import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import { UserResolver } from './resolvers/UserResolver';
import { LoginResolver } from './resolvers/LoginResolver';
import { CityResolver } from './resolvers/CityResolver';

export async function runServer() {
    // create express server
    const app = express();
    // create graphql API
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver, LoginResolver, CityResolver]
        }),
        introspection: true,
        playground: true,
        context: ({ req }) => ({ req })
    });
    // set apollo to work on express
    server.applyMiddleware({ app, path: '/graphql' });

    return app;
}