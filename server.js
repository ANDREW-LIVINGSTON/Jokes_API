const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");



app.use(express.json());
app.use(express.urlencoded({ extended: true}));



//app.get("/api/hello", (req, res)=>{
//    res.json({message: "Hello Jokes API"});
//});

require("./server/config/jokes.config");
require("./server/routes/jokes.route")(app);


app.listen(port, ()=>console.log(`Listening on port ${port}`));