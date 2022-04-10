const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3001
app.get("/hello", function(req, res) {
    res.send("hello");
})
app.listen(PORT, function(req,res){
console.log(`listening on port ${PORT}`)
})