const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Booksgoogle",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// mongodb+srv://yvesharry:<password>@cluster0.gvsstor.mongodb.net/

module.exports = mongoose.connection;
