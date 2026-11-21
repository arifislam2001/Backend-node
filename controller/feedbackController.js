const FeedbackModel = require("../model/FeedbackModel");
const sendMail = require("../helpers/mailHelper");

const submitFeedback = async (req, res) => {
  try {
    const { email, description } = req.body;

    if (!email || !description) {
      return res.status(400).json({
        success: false,
        message: "Email and description are required.",
      });
    }

    
    const data = await FeedbackModel.create({
      email: email.trim(),
      description: description.trim(),
    });

    // 2. Send Email
    await sendMail(email.trim(), "New Message", description.trim());

    res.status(200).json({
      success: true,
      message: "Saved to database and email sent successfully!",
      data,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to process request.",
    });
  }
};

const getAllFeedback = async (req, res) => {
  try {
    const data = await FeedbackModel.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  submitFeedback,
  getAllFeedback,
};

