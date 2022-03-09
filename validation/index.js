const express = require("express");
const app = express();

const userRouter = require("./routers/usersRouter");

app.use(express.json());
app.use("/users", userRouter);


app.use("*", (err, req, res, next) => {
	res.send("error");
});


app.listen(8000, () => {
    console.log("Listening on port 8000");
  });