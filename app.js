const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const express = require("express");
const userRouter = require("./routes/user-route");

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server run at http://localhost:${port}`);
});
