const express = require('express');
const logger = require("morgan");
const cors = require("cors");
const dbInit = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`listening to PORT ${PORT}`)});

app.use(express.json({ limit: "40mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(logger("dev"));

dbInit();

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);



