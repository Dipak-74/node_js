import express from "express";
const app=express();
const port=3000;

app.use(express.json()); 

app.get("/getTeacher",(req,res)=>{
    res.send("Teacher data")
});
app.get("/getStudent",(req,res)=>{
    res.send("Studnet data ghe ")
});
app.post("/addStudent",(req,res)=>{
    const student=req.body;
     const names = student.map(student => student.name);
    res.json(names)
    console.log(req.body);
    
})
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Dipak Gaikwad");
    
    
})