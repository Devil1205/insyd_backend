const express = require("express");
const router = express.Router();
const {
  getUserNotifications,
} = require("../controllers/notificationController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Notification:
 *       type: object
 *       properties:
 *         userId:
 *           type: ObjectId
 *           example: "60d0fe4f5311236168a109ca"
 *           description: The ID of the user who receives the notification
 *         message:
 *           type: string
 *           description: The notification message
 *         read:
 *           type: boolean
 *           description: Whether the notification has been read
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of the notification
 */

/**
 * @swagger
 * /api/notifications/{userId}:
 *   get:
 *     summary: Get user notifications
 *     tags: [Notifications]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *         type: string
 *         required: true
 *         example: "60d0fe4f5311236168a109ca"
 *         description: The user ID
 *     responses:
 *       200:
 *         description: List of notifications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Notification'
 */
router.get("/:userId", getUserNotifications);

module.exports = router;
