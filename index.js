const express = require('express')
const cors = require('cors')

const app = express();
const quizRouter = require("./routes/quiz.route");
const userRouter = require("./routes/user.route");
const leaderboardRouter = require("./routes/leaderboard.route");
const initializeDbConnection = require("./db/db.connection");
const { addingDataToDb } = require("./data.js")
const PORT = process.env.PORT || 5000;
initializeDbConnection();

app.use(cors());
app.use(express.json());
app.use("/quiz", quizRouter)
app.use("/leaderboard", leaderboardRouter)
app.use("/user", userRouter)
app.get("/", (req, res) => {
  res.send("Quiz App Backend")
})
app.post("/add", addingDataToDb)
app.get("*", (req, res) => {
  res.status(400).json("Page Not Found");
})

app.listen(PORT, () => {
  console.log("server started at", PORT);
});
