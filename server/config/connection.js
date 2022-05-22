const mongoose = require("mongoose");

// set mongoDB connection to URI key or to localhost
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/gamerzstatz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
