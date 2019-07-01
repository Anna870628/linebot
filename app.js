var http=require("http");
var express=require("express");

var app=express();
var port=process.env.PORT;
var servwe=http.Server(app).listen(port);//問SERVER設定為APP
var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({
extend:true
}));

app.use(bodyParser.json());
app.get("/api",function(req,res){
console.log("R");//
res.send("R!!!");//web display resend

})
app.post("/",function(req,res)
{
console.log("get line message!");
var result=req.body.events;
console.log(JSON.stringify(result));
}
