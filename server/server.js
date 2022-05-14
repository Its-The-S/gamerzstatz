const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const axios = require("axios");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}
// comment out lines 27-29 to see apollo server, type npm run start to just see the server
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

app.get("/api/account", async (req, res) => {
    const response = await axios({
        method: "get",
        url: "http://xbl.io/api/v2/account",
        responseType: "json",
        headers: { "X-Authorization": "wsscs0cswwgkg4s4ko40804o40s0444kckc" },
    });
    return res.json(response.data);
    // const xbl = axios.create({
    //     baseURL: "http://xbl.io/api/v2",
    //     headers: { "X-Authorization": "wsscs0cswwgkg4s4ko40804o40s0444kckc", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With" },
    //     responseType: "json",
    // });

    // const account = xbl.get("/account").then((res) => {
    //     console.log(res).catch((err) => {
    //         console.log(err);
    //     });
    // });
    // console.log(account);
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once("open", () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
