import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const ContactUS = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "sucess" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("sucess");
        setFormData({ email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <div>
      <section id="contact" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-800  bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="max-w-xl mx-auto space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 bg-gradient-to-r from-blue-400 to-blue-800 text-white font-medium rounded-lg 
                  ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:opacity-90"
                  } transition-opacity`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status === "sucess" && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a
                href="https://github.com/sumira/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sumira-pathirana/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:sumiragp@gmail.com"
                className="text-2xl text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUS;
