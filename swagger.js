const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Notification System API",
      version: "1.0.0",
      description: "API documentation for the Notification System",
    },
    servers: [
      {
        url: process.env.SERVER_URL,
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to the API routes
};

module.exports = swaggerJsdoc(options);
