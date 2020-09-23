import { setContext } from "@apollo/client/link/context";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { AppRegistry } from "react-native";
import fetch from "cross-fetch";

import MainScreen from "./src/screens/MainScreen";

const httpLink = new HttpLink({
  uri: "http://192.168.11.2:4000/",
  fetch,
});
const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem("token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJja2Zic3Jva2UwMThqMDcxNTV0bzdoZXl5IiwidW5pdElkIjoiRGVzayIsImlhdCI6MTYwMDY5MzQzMiwiZXhwIjoxNjAxMjk4MjMyfQ.wXxFcp5XiNZfquA4GxwxcP5txgPXGju7kPpQOPLrKzs";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MainScreen />
    </ApolloProvider>
  );
};

AppRegistry.registerComponent("App", () => App);

export default App;
