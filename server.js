const express =require('express');
const port = 3000;
const app = express();
app.get('/', (req, res)=>{
    res.send("Welcome to Eric's Backend Application")
});

app.get('/eric', (req,res) => {res.send("Hello Eric")});

app.listen(port, ()=>console.log("Listening"));