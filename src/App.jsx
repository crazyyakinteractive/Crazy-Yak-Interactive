/* eslint-disable jsx-a11y/anchor-is-valid */

// src/App.js
import React, { useState } from "react";
import "./App.css";
import logo from "./logo.jpg"; // You'll want to replace this with your Crazy Yak logo

// Header Component
const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Crazy Yak Interactive Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#games">Games</a>
            </li>
            <li>
              <a href="/#about">About Us</a>
            </li>
            <li>
              <a href="/#devblog">Dev Blog</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Crazy Yak Interactive</h1>
        <p>
          Creating playful, vibrant gaming experiences that bring joy to players
          around the world
        </p>
        <button className="cta-button">Discover Our Games</button>
      </div>
    </section>
  );
};

// Games Showcase Component
const GamesShowcase = () => {
  // For now, using placeholder data. You'll replace these with actual games later
  const games = [
    {
      id: 1,
      title: "Coming Soon: Our First Adventure",
      image: "https://via.placeholder.com/300x200",
      description:
        "An exciting adventure game currently in development. Stay tuned for updates!",
      status: "In Development",
    },
  ];

  return (
    <section id="games" className="games-section">
      <div className="container">
        <h2>Our Games</h2>
        <div className="games-grid">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-image">
                <img src={game.image} alt={game.title} />
                <div className="game-status">{game.status}</div>
              </div>
              <div className="game-info">
                <h3>{game.title}</h3>
                <p>{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Studio Component
const AboutStudio = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Crazy Yak Interactive</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Founded in 2025, Crazy Yak Interactive is a passionate indie game
              studio focused on creating unique, engaging gaming experiences.
              Our team combines creativity, technical expertise, and a love for
              games to craft memorable adventures.
            </p>
            <p>
              Our mission is to develop games that captivate players with
              vibrant worlds, compelling characters, and innovative gameplay
              mechanics.
            </p>
          </div>
          <div className="team-grid">
            {/* Add team members here when you have them */}
            <div className="team-member">
              <div className="member-photo">
                <img src="https://via.placeholder.com/150" alt="Founder" />
              </div>
              <h3>Founder & Creative Director</h3>
              <p>The visionary behind Crazy Yak Interactive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Dev Blog Preview Component
const DevBlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Birth of Crazy Yak Interactive",
      date: "March 30, 2025",
      excerpt:
        "Today marks the beginning of our journey as a game development studio. Here's what we're planning and what you can expect from us.",
    },
  ];

  return (
    <section id="devblog" className="blog-section">
      <div className="container">
        <h2>Development Blog</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-date">{post.date}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          ))}
        </div>
        <div className="blog-cta">
          <a href="#" className="secondary-button">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

// Newsletter Component
const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter signup functionality here
    console.log("Newsletter signup for:", email);
    setEmail("");
    alert("Thanks for subscribing to our newsletter!");
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <h2>Stay Updated</h2>
        <p>
          Subscribe to our newsletter for development updates, game releases,
          and exclusive content.
        </p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
          />
          <button type="submit" className="cta-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>
              We'd love to hear from you! Reach out to us for feedback,
              collaboration opportunities, or just to say hello.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Email</h3>
                <p>hello@crazyyakinteractive.com</p>
              </div>
              <div className="contact-method">
                <h3>Social Media</h3>
                <div className="social-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Discord
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="cta-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Crazy Yak Interactive Logo" />
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#games">Games</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#devblog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Crazy Yak Interactive. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <GamesShowcase />
        <AboutStudio />
        <DevBlogPreview />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
