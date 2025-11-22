const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/login', (req,res)=>{
  const {email, password} = req.body;
  if(email && password){
    return res.send("Login Success");
  }
  res.status(400).send("Missing fields");
});

app.listen(4000, ()=> console.log("Backend running on 4000"));
