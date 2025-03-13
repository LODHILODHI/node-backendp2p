const express = require("express");
const { sendOtp, verifyOtp,login,forgotPassword,resetPassword } = require("../controllers/authController");

const router = express.Router();

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp); // registration
router.post("/login",login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
