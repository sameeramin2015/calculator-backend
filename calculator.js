const bodyParser = require("body-parser");
const express = require("express");

const app = express();
// require body-parser
app.use(bodyParser.urlencoded({extended: true}));

// creating new route
app.get("/", function(req, res){
    res.sendFile(__dirname + "/calculator.html");
});

// creating post requst 
app.post("/", function(req, res){
  var n1 = (req.body.n1);
  var n2 = (req.body.n2);
// convert string to number
    n1 = (parseInt(n1));
    n2 = (parseInt(n2));
  var sum = n1 + n2;
  res.send("The sum is: " + sum);
});

// creating our server
app.listen(3000, function(){
    console.log("Server is running on port 3000!");
});
