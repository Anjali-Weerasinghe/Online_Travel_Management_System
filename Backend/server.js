const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true
}));
app.use(cookieParser());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;


mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopologyL: true,
    useFindAndModify: false
  })
  
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log('MongoDB Connection Success!!!')
  })

  const busrouteRouter = require("./Routes/busroutes");
  app.use("/busroute", busrouteRouter);

  const journeyRouter = require("./Routes/journeys");
  app.use("/journey", journeyRouter);

  const TimetableRouter = require("./Routes/timetables");
  app.use("/timetable", TimetableRouter);


  const DriverRouter = require("./Routes/drivers");
  app.use("/driver", DriverRouter);

  const busRouter = require("./Routes/busses");
  app.use("/bus", busRouter);




  
  app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`)
  })
  

  app.use("/user", require("./routes/userRoutes"));