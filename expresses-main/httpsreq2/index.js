import express from "express";

const app = express();
const port = 3000;



app.get("/", (req, res) => {

    // res.send("hello world");
    res.send("hello");

});


app.post("/register", (req,res) =>{

    // do something with the data
    res.sendStatus(201);

});

app.put("/user/aaryam", (req,res) =>{

    res.sendStatus(200);

});
app.patch("/user/aaryam", (req,res) =>{

    res.sendStatus(200);

});
app.delete("/user/aaryam", (req,res) =>{

    res.sendStatus(200);

});


app.listen(3000, () => {

    console.log('Server is running on port 3000.');


});