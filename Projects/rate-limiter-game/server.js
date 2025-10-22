const express=require("express");
const rateLimiter=require("./rate-limiter");
const app=express();

const port=5000;

app.use(rateLimiter);

app.get("/",(req,res)=>{
    res.send("Hi Welcome to the API GGate!!!/Try hitting the gate");
});
// app.get("/", (req, res) => {
//   res.send("⚔️ Welcome to the API Gate! Try hitting /data");
// });
app.get("/data",(req,res)=>{
    res.send("You found the Data");
})

app.listen(port,()=>{
    console.log(`Server is running om port :http://localhost:${port}`);
});
