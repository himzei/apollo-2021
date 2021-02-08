import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import client from "./apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";

ReactDOM.render(

  
    <ApolloHooksProvider client={client}>
       <App />
    </ApolloHooksProvider>,
  

  
  document.getElementById("root")
);
