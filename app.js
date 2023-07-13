//jshint esverion:6
const express=require("express");
const bodyParser=require("body-parser");

const app=express();
let items =["Wake up Early", "Get Ready for College"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.get("/", function(req,res){
let today=new Date();
let currentDay= today.getDay();
let options= {
  weekday : "long",
  month:"long",
  day:"numeric",
};
let day= today.toLocaleDateString("en-US", options);
res.render("list", {kindofday: day, newListItem: items});
});
app.post("/", function(req,res){
  let item=req.body.newItem;
   items.push(item);
res.redirect("/");
})
app.listen(3000, function(req,res){
  console.log("server connected");
});
