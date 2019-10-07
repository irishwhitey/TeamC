var express = require("express");


var app = express();

// app.listen(3000, () => {
//  console.log("Server running on port 3000");
// });

function getResult(){
	return 5;
}
app.post("/", (req, res, next) => {
 	res.json({ result: getResult() })
 	res.status(200);
 	res.end();
});

module.exports = app