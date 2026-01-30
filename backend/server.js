const express=require('express');
const fs=require('fs');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

const DATA_FILE='./backend/data.json';
if(!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE,'[]');

// Submit feedback
app.post('/feedback',(req,res)=>{
  const feedbacks=JSON.parse(fs.readFileSync(DATA_FILE));
  feedbacks.push(req.body);
  fs.writeFileSync(DATA_FILE,JSON.stringify(feedbacks,null,2));
  res.json({success:true,message:"Feedback submitted!"});
});

// Get all feedbacks
app.get('/feedbacks',(req,res)=>{
  const feedbacks=JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(feedbacks);
});

app.listen(3000,()=>console.log("Server running at http://localhost:3000"));
