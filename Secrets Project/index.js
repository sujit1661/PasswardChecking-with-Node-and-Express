//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyparser from "body-parser";
import express from "express";
import { appendFile } from "fs";
import { dirname } from "path";
import {fileURLToPath} from "url";

const port=3000;
// use express to create a new app
const app=express();

// used to parse the data from the form
app.use(bodyparser.urlencoded({ extended: true }));

// use express to serve static files
const __dirname=dirname(fileURLToPath(import.meta.url));


// used to listen to the port
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
})

// used to post the data to the server
app.post("/check",(req,res)=>{
  const pass=req.body["password"];
  if(pass==="ILoveProgramming"){
    res.sendFile(__dirname+"/public/secret.html");
  }else{
    res.sendFile(__dirname+"/public/index.html");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
