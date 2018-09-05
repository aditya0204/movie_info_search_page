var app =require("express")();
var request=require("request");
var ejs=require("ejs");

app.set("view engine","ejs");

app.get("/",function(req,res){

    res.render("search");
})


app.get("/results",function(req,res){
  //  res.send("Welcome to results");
   var query=req.query.search;
   var url ="http://www.omdbapi.com/?apikey=f7475028&t="+query;
    request(url,function(error,response,body){
           if(!error&&response.statusCode==200){
                var data=JSON.parse(body);
                res.render("results",{data:data});
           }
    
    })

})




app.listen(3000,function(req,res){


      console.log("page started");
  })