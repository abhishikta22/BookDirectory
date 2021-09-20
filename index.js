const express = require('express');
const app = express();
require('./config/dbConnect')();
const dotenv = require("dotenv");
const bookRoute = require('./routes/BookRoute');
dotenv.config();
const PORT = process.env.PORT || 8081;
app.use(express.json());
app.use("/api/book", bookRoute);

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})

