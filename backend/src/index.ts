import express from "express";

const app=express();

app.post('/signup',(req,res)=>{
    const {name,password,email}=req.body;
})

app.post('/login',(req,res)=>{
    const {name,password,email}=req.body;
})