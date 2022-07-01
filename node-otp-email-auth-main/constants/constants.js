require('dotenv').config();
module.exports = {
  allowedOrigins: ['http://localhost:3000/'],
  SERVER_PORT: process.env.PORT || 5000,
  SERVER_DB_URI: process.env.DB_URI,
  JWT_SECRET: 'thisIskey',
  OTP_LENGTH: 10,
  OTP_CONFIG: {
    upperCaseAlphabets: false,
    specialChars: false,
  },
  MAIL_SETTINGS: {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    // service: 'gmail',
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASSWORD,
    },
  },
};
