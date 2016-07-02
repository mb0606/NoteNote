
var mongoose   = require("mongoose");

var noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date:{
      type: String
  },
  content: {
      type: String
  },
  img:{
      type: String
  }
});

 module.exports = mongoose.model("Note", noteSchema);
