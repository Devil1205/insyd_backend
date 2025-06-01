const express = require("express");
const router = express.Router();
const { addToAction } = require("../controllers/actionController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Action:
 *       type: object
 *       required:
 *         - userId
 *         - type
 *         - targetUserId
 *       properties:
 *         userId:
 *           type: string
 *           example: "60d0fe4f5311236168a109ca"
 *           description: The ID of the user performing the action
 *         type:
 *           type: string
 *           example: "follow"
 *           description: The type of action (e.g., 'follow')
 *         targetUserId:
 *           type: string
 *           example: "60d0fe4f5311236168a109ca"
 *           description: The ID of the target user
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of the action
 */

/**
 * @swagger
 * /api/actions:
 *   post:
 *     summary: Create a new action
 *     tags: [Actions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Action'
 *     responses:
 *       200:
 *         description: The created action
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Action'
 */
router.post("/", addToAction);

module.exports = router;
