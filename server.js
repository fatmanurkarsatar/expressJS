const express = require("express");
const {accessControl} = require("./middleware");

const user = [
    {id: 1, name:"Fatma Nur Karsatar",place:"Kahramanmaraş"},
    {id: 2, name:"Keziban Akdeniz",place:"Konya"},
    {id: 3, name:"Nisa Nur Özkur",place:"Sivas"}
]

const app = express();

const PORT= 5000;
app.use(express.json());
//get request

app.get("/users",accessControl,(req,res,next)=>{
    res.json(user);
});

app.post("/users",(req,res,next)=>{
    user.push(req.body);
    res.json({
        success: true,
        data: user
    })
});
//güncelleme requesti
app.put("/users/:id",(req,res,next)=>{
    const id = parseInt(req.params.id);
    for(let i=0;i<user.length;i++){
        if(user[i].id === id){
            user[i] = {
                ...user[i],
                ...req.body
            };
        }
    }
    res.json({
        success: true,
        data: user
    })
});
//delete requesti
app.delete("/users/:id",(req,res,next)=>{
    const id = parseInt(req.params.id);
    for(let i=0;i<user.length;i++){
        if(user[i].id===id){
            user.splice(i, 1);
        }
    }
    res.json({
        success: true,
        data: user
    })
});

app.listen(PORT,() =>{
    console.log("server started " + PORT);
});

