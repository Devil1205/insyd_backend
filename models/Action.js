const mongoose = require('mongoose');
const actionSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    type: String,
    targetUserId: mongoose.Schema.Types.ObjectId,
    createdAt: { type: Date, default: Date.now }
  });
  module.exports = mongoose.model('Action', actionSchema);