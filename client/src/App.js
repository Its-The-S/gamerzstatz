import React from "react";
import UserProvider from "./utils/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// pages
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";
import Compare from "./pages/Compare";
import Footer from "./components/Footer/index";

// create url for using graphql
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// settings for apollo provider
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    // apollo
    <ApolloProvider client={client}>
      {/* user context */}
      <UserProvider>
        {/* react router */}
        <Router>
          {/* site */}
          <>
            <Nav />
            <Routes>
              {/* pages */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/compare/:titleId" element={<Compare />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
            <Footer />
          </>
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
