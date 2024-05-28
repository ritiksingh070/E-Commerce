const mongoose =require('mongoose')

const connectDb =()=>{
  mongoose
  .connect(
    "mongodb+srv://ritiksingh1809:2Bwje9h0usboBK2G@cluster0.vr2jqzf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      dbName: "E-comm",
    }
  )
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));
}

module.exports=connectDb;