var express=require('express');
var path=require('path');
var app=express();

app.get('/',function(req,res){
  var rootPath=path.join(__dirname,'./files');
  res.sendFile('chatbot.html',{root:rootPath});
});


