import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home  from "./components/Home";
const client = new ApolloClient({
  uri: "https://3f31-103-113-190-50.in.ngrok.io/v1/graphql",
  cache: new InMemoryCache()
  
});
function App(){
  return(
    
  <ApolloProvider client={client}>
  <Home />
  </ApolloProvider>
  
);
}
export default App;

