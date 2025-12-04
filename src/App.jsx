import React, { useState } from 'react';
import { 
  Menu, X, Film, Camera, Tv, Radio, MapPin, 
  MessageCircle, Heart, Play, MonitorPlay 
} from 'lucide-react';
import { motion } from 'framer-motion'; 
import "./App.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const phoneNumber = "918000145566";

  const videos = [
    "https://www.youtube.com/embed/y64fArgaTXU",
    "https://www.youtube.com/embed/7OfTSHwZiOc",
    "https://www.youtube.com/embed/mc8T45F2ntM",
    "https://www.youtube.com/embed/0j3Ytsaiew0",
    "https://www.youtube.com/embed/nuQPgFRX8Z0",
    "https://www.youtube.com/embed/BPr3rACMMCs",
    "https://www.youtube.com/embed/uYidLUM-R38",
    "https://www.youtube.com/embed/UV_WFVgWhnQ"
  ];

  const handleWhatsAppClick = () => {
    setLoading(true);
    const baseMessage = "Hello Zoom Video Editing, I am interested in your video solutions.";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
          openWhatsApp(`${baseMessage} My Location: ${mapLink}`);
          setLoading(false);
        },
        () => {
          openWhatsApp(`${baseMessage} (Location permission denied)`);
          setLoading(false);
        }
      );
    } else {
      openWhatsApp(baseMessage);
      setLoading(false);
    }
  };

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const services = [
    {
      title: "Pre Wedding",
      icon: <Heart className="service-icon" />,
      description: "Cinematic pre-wedding shoots capturing your beautiful love story. Based in Junagadh. We transform raw footage into professional films, highlights, and documentaries.",
      img: "https://placehold.co/600x400/222/orange?text=Pre+Wedding",
      bgImg: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Short Film",
      icon: <Film className="service-icon" />,
      description: "Professional cutting, color grading, and sound design for short films. Based in Junagadh. We transform raw footage into professional films, highlights, and documentaries.",
      img: "https://placehold.co/600x400/333/orange?text=Short+Film",
      bgImg: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Highlights",
      icon: <Play className="service-icon" />,
      description: "Crisp, high-energy highlight reels for events, sports, and functions. Based in Junagadh. We transform raw footage into professional films, highlights, and documentaries.",
      img: "https://placehold.co/600x400/444/orange?text=Highlights",
      bgImg: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "TV Ad",
      icon: <Tv className="service-icon" />,
      description: "Commercial editing optimized for Television broadcast standards. Based in Junagadh. We transform raw footage into professional films, highlights, and documentaries.",
      img: "https://placehold.co/600x400/555/orange?text=TV+Ad",
      bgImg: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Documentary",
      icon: <Camera className="service-icon" />,
      description: "Story-driven narrative editing for long-form documentary projects. Based in Junagadh. We transform raw footage into professional films, highlights, and documentaries.",
      img: "https://placehold.co/600x400/666/orange?text=Documentary",
      bgImg: "https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Live Telecast",
      icon: <Radio className="service-icon" />,
      description: "Setup and management for live streaming and broadcast mixing. Based in Junagadh. We transform raw footage into professional films, highlights, and documentaries.",
      img: "https://placehold.co/600x400/777/orange?text=Live+Telecast",
      bgImg: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-content">
        <a href="#" className="logo">
  <MonitorPlay size={32} color="#ea580c" />

  <div className="logo-text">
    <h1>Zoom Video Editing</h1>
    <p>Kapil Umretiya</p>
  </div>
</a>

          {/* <motion.a 
  href="#"
  className="logo"
  whileHover={{ scale: 1.1, rotate: 3 }}
  whileTap={{ scale: 0.95, rotate: 0 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  <MonitorPlay size={32} color="#ea580c" />
  Zoom Video<span>Editing</span>
</motion.a> */}

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Solutions</a></li>
            <li><a href="#gallery">Gallery</a></li>
            {/* <li><a href="#contact" className="btn-nav-contact">Contact Us</a></li> */}
            <li><a href="#contact">Contact Us</a></li>

          </ul>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mobile-nav">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Solutions</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} style={{ color: '#ea580c' }}>Contact Us</a>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Visual Stories <br />
            <span>Made Cinematic</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Based in Junagadh. We transform raw footage into professional films, highlights, and documentaries.
          </motion.p>
          <motion.button
            onClick={handleWhatsAppClick}
            disabled={loading}
            className="btn-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {loading ? "Locating..." : "Start Your Project"} <MessageCircle size={20} />
          </motion.button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <h2>All Video Solutions</h2>
            <div className="divider"></div>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={service.bgImg} className="card-image" alt={service.title} />
                <div className="card-content">
                  {service.icon}
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section bg-darker">
        <div className="container">
          <div className="section-header">
            <h2>Our Portfolio</h2>
            <div className="divider"></div>
          </div>
          <div className="gallery-grid">
            {videos.map((video, index) => {
              const videoId = video.split("embed/")[1];
              return (
                <motion.div
                  key={index}
                  className="gallery-item"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {activeVideo === index ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`${video}?autoplay=1`}
                      title={`video-${index}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={`video-${index}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div
                        className="gallery-overlay"
                        onClick={() => setActiveVideo(index)}
                        style={{ cursor: "pointer" }}
                      >
                        <Play size={48} fill="#ea580c" color="white" />
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="contact-box">
            <h2>Ready to Create Magic?</h2>
            <p style={{ marginTop: "15px", color: "#ccc" }}>
              We are based in <strong>Junagadh, Gujarat</strong>. Click below to send your inquiry and location on WhatsApp.
            </p>
            <button onClick={handleWhatsAppClick} className="btn-whatsapp">
              <MessageCircle size={24} /> Chat on WhatsApp
            </button>
            <div className="location-info">
              <MapPin size={20} color="#ea580c" />
              <span
                style={{ color: "white", cursor: "pointer", textDecoration: "underline" }}
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps?daddr=Saibaba+Society,+Junagadh,+Gujarat+362001",
                    "_blank"
                  )
                }
              >
                Junagadh, Gujarat
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-flex">
          <div className="footer-logo">Zoom Video Editing</div>
          <div className="footer-copy">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
