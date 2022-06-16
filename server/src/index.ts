import express = require("express");

const app = express();
const port = 4000;

app.get("/", (_request: any, response: any) => {
	response.send("Hi!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
