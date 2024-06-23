const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/users.routes");
const { courseRoute } = require("./routes/courses.route");
const { videoRoute } = require("./routes/videos.route");
const cors = require('cors');
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRouter);
app.use("/courses", courseRoute);
app.use("/videos", videoRoute);

// Route to regenerate token
app.get("/regenerateToken", (req, res) => {
  const rToken = req.headers.authorization?.split(" ")[1];
  try {
    const decoded = jwt.verify(rToken, "ARIVU");
    const token = jwt.sign(
      { userId: decoded.userId, user: decoded.user },
      "arivu",
      { expiresIn: "7d" }
    );
    res.status(201).json({ msg: "token created", token });
  } catch (err) {
    res.status(400).json({ msg: "not a valid Refresh Token" });
  }
});

// Default route
app.get('/', (req, res) => {
  res.status(200).json({ message: "Welcome to CourseCraft Backend" });
});

// Starting server after DB connection
app.listen(port, async () => {
  try {
    await connection;
    console.log(`connected to db`);
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log(`error: ${error}`);
  }
});
