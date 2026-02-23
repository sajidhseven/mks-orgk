import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const upcomingEvents = [
    {
      title: "Ugadi Sambhrama 2026",
      date: "Saturday, 28 March 2026",
      location: "Springvale Town Hall",
      image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
    },
    {
      title: "Kannada Rajyotsava 2025",
      date: "Saturday, 15 Nov 2025",
      location: "Box Hill Town Hall",
      image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
    },
    {
      title: "Annual Sports Meet",
      date: "Sunday, 12 Oct 2025",
      location: "TBD",
      image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
    },
    {
      title: "Cultural Night",
      date: "Friday, 05 Sept 2025",
      location: "Springvale Town Hall",
      image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
    },
    {
      title: "Community Picnic",
      date: "Sunday, 15 Feb 2025",
      location: "Botanical Gardens",
      image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
    },
    {
      title: "Youth Workshop",
      date: "Saturday, 20 July 2025",
      location: "Community Center",
      image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
    },
    {
      title: "Women's Day Celebration",
      date: "Saturday, 08 March 2025",
      location: "MKS Hall",
      image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
    },
    {
      title: "Dasara Festival",
      date: "Saturday, 04 Oct 2025",
      location: "Springvale Town Hall",
      image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
    }
  ];

  const images = [
    "https://images.unsplash.com/photo-1605379399642-870262d3d051",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    "Our-Story1.png",
    "Our-Story2.png",
    "https://images.unsplash.com/photo-1544531586-fde5298cdd40",
    "Our-Story3.png",
    "Our-Story4.png",
    "https://images.unsplash.com/photo-1593113630400-ea4288922497",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  ];



  return (
    <>
      {/* ================= WELCOME SECTION ================= */}
      <section className="welcome-section">
        <img src="/Hero.jpg" alt="Welcome" className="welcome-bg-image" />
        <div className="welcome-overlay"></div>
        <div className="welcome-content">
          <h1>WELCOME TO MELBOURNE KANNADA SANGA</h1>
        </div>
      </section>

      {/* ================= UPCOMING EVENTS ================= */}
      <section className="mks-events-section">
        <div className="mks-events-container">

          {/* TOP HEADER */}
          <div className="mks-events-top">
            <h2>Upcoming Events</h2>


          </div>
          {/* FEATURED EVENT */}
          <div
            className="mks-featured-event"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(91, 28, 28, 0.95), rgba(91, 28, 28, 0.6)), url("/Our-Story1.png")`
            }}
          >
            <div className="mks-featured-content">
              <h3>Kannada Rajyotsava Celebration</h3>
              <p>📅 Sat, Nov 18, 2024 | 5:00 PM</p>
              <p>📍 TBD Hall, Melbourne VIC</p>

              <div className="mks-featured-buttons">
                <button className="primary">Register Now</button>
                <button className="secondary">Add to Calendar</button>
              </div>
            </div>
          </div>

          {/* VIEW ALL */}
          <div className="mks-view-all">
            <Link to="/upcoming-events">View All Events →</Link>
          </div>

          {/* EVENT GRID */}
          <div className="mks-event-grid">

            <div className="mks-card">
              <div className="mks-card-img kids"></div>
              <div className="mks-card-body">
                <h4>Kannada Classes for Kids</h4>
                <p>📅 Sun, May 12, 2024</p>
                <p>📍 Kannada Bhavana, Melbourne</p>
                <button>Register</button>
              </div>
            </div>

            <div className="mks-card">
              <div className="mks-card-img ugadi"></div>
              <div className="mks-card-body">
                <h4>Ugadi Festival</h4>
                <p>📅 Sat, Apr 13, 2024</p>
                <p>📍 TBD Hall, Melbourne</p>
                <button>Learn More</button>
              </div>
            </div>

            <div className="mks-card">
              <div
                className="mks-card-img gala"
                style={{ backgroundImage: 'url("/Our-Story1.png")' }}
              ></div>
              <div className="mks-card-body">
                <h4>Fundraising Gala Night</h4>
                <p>📅 Fri, Jun 7, 2024</p>
                <p>📍 Grand Ballroom, Melbourne</p>
                <button>Tickets</button>
              </div>
            </div>

            <div className="mks-card">
              <div className="mks-card-img seniors"></div>
              <div className="mks-card-body">
                <h4>Senior’s Meetup</h4>
                <p>📅 Tue, Jun 18, 2024</p>
                <p>📍 Local Community Center</p>
                <button>Join</button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= HERO VIDEO ================= */}
      <section className="hero-section">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://mks.org.au/wp-content/uploads/2025/03/MKS-Video-prototype-1-1.mp4"
            type="video/mp4"
          />
        </video>

        {/* Optional overlay for better text visibility */}
        <div className="video-overlay"></div>

      </section>



      {/* ================= PHOTO GALLERY ================= */}
      <section className="gallery-section">
        <div className="gallery-container">

          <h2 className="gallery-heading">PHOTO GALLERY</h2>
          <div className="gallery-divider">
            <span></span>
            <div className="lotus">✿</div>
            <span></span>
          </div>

          <h3 className="gallery-subtitle">
            Moments from Our Community
          </h3>
          <p className="gallery-description">
            Explore memories from our vibrant cultural and spiritual events.
          </p>

          <div className="gallery-grid">
            {images.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Gallery Image ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="gallery-btn-wrapper">
            <button className="gallery-btn">View Full Gallery</button>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
