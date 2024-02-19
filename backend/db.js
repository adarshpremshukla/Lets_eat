
const mongoose = require("mongoose");

const mongodb = async () => {
  const mongoURI =
    "mongodb://127.0.0.1:27017/gofoodmern?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1";

  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fooddata =  mongoose.connection.db.collection("fooddata");
    const data = await fooddata.find({}).toArray();
    global.fooddata = data;
    // console.log(global.fooddata);

    const foodcategory = mongoose.connection.db.collection("foodcategory");
    const fdata = await foodcategory.find({}).toArray();
    global.foodcategory = fdata;
    // console.log(global.foodcategory);
   
    // console.log(global.data);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
  // finally
  // {
  //   // Close the MongoDB connection
  //   try {
  //     await mongoose.connection.close();
  //     console.log("Connection closed");
  //   } catch (error) {
  //     console.error("Error closing MongoDB connection:", error.message);
  //   }
  // }
};
module.exports = mongodb;

