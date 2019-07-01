var http=require("http");
var express=require("express");

var app=express();
var port=process.env.PORT;
var servwe=https.Server(app).listen(port);//問SERVER設定為APP
var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({
extend:true
}));

app.use(bodyParser.json());
app.get("/API",function(req,res){
console.log("R")
res.send("R!!!!");//web display resend

})
