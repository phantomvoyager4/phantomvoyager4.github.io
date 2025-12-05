import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function ContactForm({ palette }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:obywatelnumer04230@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Contact from Website",
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )}`;

      // Try different methods to open email client
      const link = document.createElement("a");
      link.href = mailtoLink;
      link.target = "_blank";

      // Check if we can use the link method
      try {
        link.click();
        // Give it a moment then show success
        setTimeout(() => {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 500);
      } catch {
        // Fallback to window.open
        try {
          window.open(mailtoLink, "_blank");
          setTimeout(() => {
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
          }, 500);
        } catch {
          // Final fallback to location.href
          window.location.href = mailtoLink;
          setTimeout(() => {
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
          }, 500);
        }
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error opening email client:", error);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 500);
    }
  };

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto px-4 py-16"
    >
      <div
        className="rounded-2xl p-8 shadow-2xl backdrop-blur-sm"
        style={{
          background:
            palette.icon === "#181818"
              ? `linear-gradient(135deg, ${palette.headerBg}80, ${palette.navbarBackground}85)`
              : `linear-gradient(135deg, ${palette.headerBg}95, ${palette.navbarBackground}95)`,
          border: `2px solid ${palette.cardIcon}30`,
          boxShadow: `0 25px 50px -12px ${palette.cardIcon}20, 0 0 0 1px ${palette.cardIcon}10`,
        }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2
            className="font-InriaSerif text-3xl sm:text-4xl font-semibold mb-4"
            style={{ color: palette.cardText }}
          >
            Get in Touch
          </h2>
          <p
            className="font-InriaSerif text-lg opacity-80"
            style={{ color: palette.cardText }}
          >
            Have a question or want to collaborate? Send me a message!
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block font-InriaSerif text-sm font-medium mb-2"
                style={{ color: palette.cardText }}
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg font-InriaSerif transition-all duration-200 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: `${palette.cardIcon}10`,
                  border: `2px solid ${palette.cardIcon}20`,
                  color: palette.cardText,
                  focusRingColor: `${palette.cardIcon}40`,
                }}
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block font-InriaSerif text-sm font-medium mb-2"
                style={{ color: palette.cardText }}
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg font-InriaSerif transition-all duration-200 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: `${palette.cardIcon}10`,
                  border: `2px solid ${palette.cardIcon}20`,
                  color: palette.cardText,
                }}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block font-InriaSerif text-sm font-medium mb-2"
              style={{ color: palette.cardText }}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg font-InriaSerif transition-all duration-200 focus:outline-none focus:ring-2"
              style={{
                backgroundColor: `${palette.cardIcon}10`,
                border: `2px solid ${palette.cardIcon}20`,
                color: palette.cardText,
              }}
              placeholder="What's this about?"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block font-InriaSerif text-sm font-medium mb-2"
              style={{ color: palette.cardText }}
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg font-InriaSerif transition-all duration-200 focus:outline-none focus:ring-2 resize-vertical"
              style={{
                backgroundColor: `${palette.cardIcon}10`,
                border: `2px solid ${palette.cardIcon}20`,
                color: palette.cardText,
              }}
              placeholder="Tell me what's on your mind..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 rounded-lg font-InriaSerif font-medium text-lg border-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor:
                  palette.icon === "#181818" ? "#181818" : palette.cardIcon,
                color:
                  palette.icon === "#181818" ? "#ffffff" : palette.headerBg,
                borderColor:
                  palette.icon === "#181818" ? "#181818" : palette.cardIcon,
              }}
              whileHover={
                !isSubmitting
                  ? {
                      scale: 1.05,
                      backgroundColor:
                        palette.icon === "#181818"
                          ? "#333333"
                          : `${palette.cardIcon}dd`,
                      boxShadow: `0 10px 25px -5px ${palette.cardIcon}40`,
                    }
                  : {}
              }
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Send Message
                </span>
              )}
            </motion.button>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-4 rounded-lg"
              style={{
                backgroundColor: "#10B98120",
                border: "1px solid #10B981",
                color: "#059669",
              }}
            >
              <p className="font-InriaSerif">
                ✅ Email client should have opened! If not, please copy the
                email below and send manually.
              </p>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-4 rounded-lg"
              style={{
                backgroundColor: "#EF444420",
                border: "1px solid #EF4444",
                color: "#DC2626",
              }}
            >
              <p className="font-InriaSerif">
                ❌ Couldn't open email client automatically. Please copy the
                information below and email me manually at
                obywatelnumer04230@gmail.com
              </p>
              {formData.name || formData.email || formData.message ? (
                <div className="mt-3 p-3 bg-gray-100 rounded text-left text-sm">
                  <strong>Subject:</strong>{" "}
                  {formData.subject || "Contact from Website"}
                  <br />
                  <strong>From:</strong> {formData.name} ({formData.email})
                  <br />
                  <strong>Message:</strong>
                  <br />
                  {formData.message}
                </div>
              ) : null}
            </motion.div>
          )}
        </motion.form>

        {/* Alternative Contact Info */}
        <motion.div
          className="mt-8 text-center border-t pt-6"
          style={{ borderColor: `${palette.cardIcon}20` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p
            className="font-InriaSerif text-sm opacity-70 mb-2"
            style={{ color: palette.cardText }}
          >
            Or reach me directly at:
          </p>
          <motion.a
            href="mailto:obywatelnumer04230@gmail.com"
            className="font-InriaSerif text-lg font-medium hover:underline transition-all duration-200"
            style={{ color: palette.cardIcon }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            obywatelnumer04230@gmail.com
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ContactForm;
