const { app,db, PORT } = require('./config/config');
const express=require("express")
const { SERVER_DB_URI } = require('./constants/constants');
// const mongoose = require("mongoose")
app.use(express.json())

// const db="mongodb+srv://moni07:moni07@firstproject.jvubt.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-bqqgzl-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
const bootstrap = async () => {
  try {
    await db.connect(SERVER_DB_URI);
    app.listen(PORT, async () => {

      console.log(`server started ON ${PORT}`)
    });
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
