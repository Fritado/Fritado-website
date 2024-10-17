const express = require("express");
const app = express();
const database = require("./Config/database");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const IdentityRoute = require("./Routes/IdentityRoute");
const BlogRoutes = require("./Routes/BlogRoutes");
const GuideRoutes = require("./Routes/GuideRoutes");
const demoRoutes = require("./Routes/demoRoutes")

require("dotenv").config();
const PORT = process.env.PORT || 4000;
database.connect();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:30000",
    credentials: true,
  })
);
app.use("/uploads", express.static("uploads"));
app.use("/guide", express.static("guide"));

app.use("/api/auth", IdentityRoute);
app.use("/api", BlogRoutes);
app.use("/api", GuideRoutes);
app.use("/api", demoRoutes);


app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App is listening on ${PORT}`);
});
