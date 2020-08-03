import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";

import Books from "./Books";
import client from "./apollo";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <Books />
      </div>
    </ApolloProvider>
  );
};

render(<App />, document.getElementById("root"));
