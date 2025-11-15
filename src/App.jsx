// src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./logo.jpg"; // Make sure this file exists in your src directory

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer to a specific date and time
  useEffect(() => {
    // Set your specific target date and time here
    const targetDate = new Date("2026-04-21T12:00:00"); // Example: May 1, 2025 at 12:00 PM

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const form = e.target;
    const data = new FormData(form);

    // Submit the form - with Netlify attribute, this will be handled by Netlify
    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        console.log("Form successfully submitted");
        setEmail("");
        setIsSubmitted(true);
        // Reset submission message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("There was a problem submitting your email. Please try again.");
      });
  };

  return (
    <div className="under-construction-container">
      <div className="under-construction-content">
        <div className="logo-container">
          <img src={logo} alt="Crazy Yak Interactive Logo" className="logo" />
        </div>

        <h1>Our Website is Under Construction</h1>
        <div className="divider"></div>

        <p className="tagline">We're working on something awesome for you!</p>

        <div className="countdown-container">
          <div className="countdown-item">
            <span className="countdown-value">{countdown.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{countdown.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{countdown.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{countdown.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>

        <div className="subscription-container">
          <h3>Get notified when we launch</h3>
          <form
            name="launch-notification"
            method="POST"
            netlify="true"
            onSubmit={handleSubmit}
            className="subscription-form"
          >
            {/* Hidden input for Netlify Forms */}
            <input type="hidden" name="form-name" value="launch-notification" />

            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
                      />
            <div data-netlify-recaptcha="true"></div>
            <button type="submit" className="cta-button">
              Notify Me
            </button>
          </form>
          {isSubmitted && (
            <div className="success-message">
              Thank you! We'll notify you when we launch.
            </div>
          )}
        </div>
        <footer className="footer">
          &copy; {new Date().getFullYear()} Crazy Yak Interactive. All rights
          reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
//<div className="social-links">
//<a href="#" target="_blank" rel="noopener noreferrer">
//Twitter
//</a>
//<a href="#" target="_blank" rel="noopener noreferrer">
//Discord
//</a>
//<a href="#" target="_blank" rel="noopener noreferrer">
//Instagram
//</a>
//</div>