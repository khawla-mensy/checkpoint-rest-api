const { json } = require("express");
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const contactRouter = require("./routes/contact");

app.use(express.json());
connectDB();
app.use("/api/contacts", contactRouter);

const port = 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

connectDB();
