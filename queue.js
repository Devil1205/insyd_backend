const { getNextJob } = require("./utils/queueManager");
const Notification = require("./models/Notification");
const User = require("./models/User");

function startQueueWorker() {
  setInterval(async () => {
    const job = getNextJob();
    if (job) {
      const currentuser = await User.findById(job.userId);
      const targetUser = await User.findById(job.targetUserId);
      const message =
        `User: ${currentuser.name} performed ${job.type}` +
        (targetUser ? ` on user: ${targetUser.name}` : "");
      const newNotification = new Notification({
        userId: job.targetUserId || job.userId,
        message,
      });
      await newNotification.save();
      console.log("Notification created:", message);
    }
  }, 1000);
}

module.exports = startQueueWorker;
