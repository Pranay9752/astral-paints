// lib/graphql-client.js
import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.ENDPOINT;
console.log('endpoint: ', endpoint);

const client = new GraphQLClient(endpoint);

export default client;
