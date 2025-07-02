const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true,
    unique: true 
  },
  score: { 
    type: Number, 
    default: 0 
  },
  interactions: { 
    type: Number, 
    default: 0 
  },
});

module.exports = mongoose.model("Lead", leadSchema);
