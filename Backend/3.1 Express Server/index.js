import express from "express";
const app = express();
const port = 3000;

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});