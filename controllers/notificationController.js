const Notification = require("../models/Notification");

const getUserNotifications = async (req, res) => {
  const notifications = await Notification.find({
    userId: req.params.userId,
  }).sort({ createdAt: -1 });
  res.json(notifications);
};

module.exports = {
  getUserNotifications,
};
