const express = require("express");
const bodyParser = require("body-parser");


// setting new app

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// building home route

app.get("/", function(req, res){
    //res.send("Hello World!");
    res.sendFile(__dirname + "/index.html");

});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result is: " + result);
});

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);
    res.send("Your BMI is: "  + bmi);
})
// building our server

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});