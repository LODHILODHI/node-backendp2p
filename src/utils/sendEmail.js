const transporter = require("../config/email");

const sendEmail = async (email, subject, text) => {
  try {
    await transporter.sendMail({
      from: `"No Reply" <${process.env.EMAIL_USER}>`, // Use the email from the environment
      to: email,
      subject,
      text,
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
