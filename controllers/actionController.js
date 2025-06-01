const Action = require("../models/Action");
const { addToQueue } = require("../utils/queueManager");

const addToAction = async (req, res) => {
  const action = new Action(req.body);
  await action.save();
  addToQueue(action);
  res.json(action);
};

module.exports = {
  addToAction,
};
