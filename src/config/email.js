// Load environment variables
require('dotenv').config();

const nodemailer = require("nodemailer");

// Create the transporter using environment variables
const transporter = nodemailer.createTransport({
  service: "gmail", // or any other email provider
  auth: {
    user: process.env.EMAIL_USER, // Email address from .env
    pass: process.env.EMAIL_PASS, // App-specific password from .env (if 2FA is enabled)
  },
});

// Log a message to verify that the transporter is created successfully
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("Error: Missing email credentials!");
} else {
  console.log("Transporter created successfully");
}

module.exports = transporter;
