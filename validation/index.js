const express = require("express");
const app = express();

const usersRouter = require("./routers/usersRouter");

app.use((req, res, next) => {
    console.log("Request received");
    next();
  });

app.use(express.json());
app.use("/users", usersRouter);


app.use("*", (err, req, res, next) => {
	res.send("error");
});


app.listen(8000, () => {
    console.log("Listening on port 8000");
  });