const express = require("express");
const app = express();
const PORT = 3500;

app.get("/", (req, res) => {
    res.send("Hello world");
});
app.get("/contacte", (req, res) => {
    res.send("Contacte");
});
app.get("/despre", (req, res) => {
    res.send("Despre");
});

app.listen(PORT, ()=>{
    console.log(`Site-ul ruleaza: http:localhost:${PORT}`);
});