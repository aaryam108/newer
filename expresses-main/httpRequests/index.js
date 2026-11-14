import express from "express";

const app = express();
const port = 3000;



app.get("/", (req, res) => {

    // res.send("hello world");
    res.send("hello");

});


app.get("/about", (req, res) => {

    // res.send("hello world");
    res.send("about me: Aaryam");

});

app.get("/contact", (req, res) => {

    // res.send("hello world");
    res.send("contact me +123456789");

});


app.listen(3000, () => {

    console.log('Server is running on port 3000.');


});