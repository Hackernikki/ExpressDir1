const express = require("express");
const app = express();
console.dir(app);
let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port${port}`);
});
app.get("/",(req,res)=>{
    res.send("you contacted root path");
});
app.get("/apple",(req,res)=>{
    res.send("you contacted apple path");
});
app.get("/orange",(req,res)=>{
    res.send("you contacted orange path");
});
app.get("*",(req,res)=>{
    res.send("this path does not exist");
});


app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`search result for query:${q}`);
});






/*
app.use((req, res) => {
  console.log("request received");
  //console.log(req);

  let code ="<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>";
  res.send(code);
});*/
