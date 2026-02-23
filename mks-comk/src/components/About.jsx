import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  const images = [
    "Our-Story1.png",
    "Our-Story2.png",
    "Our-Story3.png",
    "Our-Story4.png"
  ];

  // const committeeData = [
  //   {
  //     image: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design.png",
  //     title: "Executive Committee 2023-25",
  //     link: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design.png",
  //   },
  //   {
  //     image: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-1.png",
  //     title: "Team Members",
  //     link: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-1.png",
  //   },
  //   {
  //     image: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-2.png",
  //     title: "Team Spirit",
  //     link: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-2.png",
  //   },
  //   {
  //     image: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-3.png",
  //     title: "Executive Committee 2022",
  //     link: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-3.png",
  //   },
  // ];

  return (
    <>

      {/* Banner Section */}
      <section className="about-banner">
        <div className="about-overlay">
          <div className="about-content">
            <img src="/logo.png" alt="MKS Logo" className="about-logo" />
            <h1 className="about-title">MELBOURNE KANNADA SANGHA</h1>
            <h2 className="about-subtitle">ಕನ್ನಡಿಗರ ಮನೆ – 1986 ರಿಂದ ಸೇವೆಯಲ್ಲಿ</h2>
            <p className="about-since">
              Since 1986 • Serving the Kannada Community in Australia
            </p>
          </div>
        </div>
      </section>


      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="our-story-container">

          <div className="our-story-slider">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index} className="slide-item">
                  <img src={img} alt="Our Story" />
                </div>
              ))}
            </Slider>
          </div>

          <div className="our-story-content">
            <h2>Our Story</h2>
            <p>
              At <strong>Melbourne Kannada Sangha</strong>, culture is more than events —
              it is identity, belonging, and community.
            </p>
            <p>
              We create a welcoming space where members feel connected,
              valued and celebrated.
            </p>
            <p>
              Through festivals, cultural programs and community initiatives,
              we preserve traditions for future generations.
            </p>
            <button className="our-story-btn">READ MORE</button>
          </div>

        </div>
      </section>


      {/* Growth Section */}
      <section className="growth-section">
        <div className="growth-container">
          <div className="growth-column">
            <p>
              MKS has grown exponentially by organizing mega cultural events,
              Kannada classes, library services and publishing the monthly
              magazine “MELNUDI”.
            </p>
            <p>
              MKS established Kannada Bhavana — one of the few outside India —
              built purely by volunteer support.
            </p>
          </div>

          <div className="growth-column">
            <p>
              Our vision includes community-driven growth with support from
              local patrons and life members.
            </p>
            <p>
              With Melbourne’s growing Indian population, MKS aims to expand
              its impact in the coming years.
            </p>
          </div>
        </div>
      </section>


      {/* History Section */}
      <section className="history-section">
        <div className="history-container">

          <div className="history-image">
            <img
              src="https://mks.org.au/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-24-at-13.05.06.jpeg"
              alt="MKS Event"
            />
          </div>

          <div className="history-content">
            <h2 className="history-title">History of MKS</h2>
            <div className="history-divider"></div>

            <p>
              Founded on 10 April 1986, Melbourne Kannada Sangha was formed
              to bring Kannadigas together and preserve language and culture.
            </p>

            <p>
              Over 36+ years, the Sangha has grown into a dynamic cultural
              association driven by dedicated volunteers.
            </p>

            <p>
              Registered as a non-profit incorporated association in 2005,
              MKS celebrates UGADI, DASARA and numerous cultural programs
              every year.
            </p>
          </div>

        </div>
      </section>


      {/* Committee Section */}
      <section className="events-section">
        <div className="events-wrapper">

          <h2 className="section-title">Events Committee</h2>
          <div className="title-divider"></div>

          <div className="events-grid">

            {/* Card 1 */}
            <div className="event-card">
              <h3 className="card-title">Executive Committee 2023-25</h3>
              <img
                src="Our-Story1.png"
                alt="Executive Committee"
                className="card-image"
              />
              <button className="primary-btn">Meet Our Team ›</button>
            </div>

            {/* Card 2 */}
            <div className="event-card">
              <h3 className="card-title">Team Members</h3>
              <p className="card-subtext">
                Dedicated volunteers who bring our events to life.
              </p>

              <div className="members-row">
                <div className="member">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. Prashanth Hegde" />
                  <span>Dr. Prashanth Hegde</span>
                  <small>President</small>
                </div>
                <div className="member">
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Arun Bharath" />
                  <span>Arun Bharath</span>
                  <small>Vice President</small>
                </div>
                <div className="member">
                  <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="Harishi Pradhan" />
                  <span>Harishi Pradhan</span>
                  <small>Secretary</small>
                </div>
                <div className="member">
                  <img src="https://randomuser.me/api/portraits/men/60.jpg" alt="Ranjit Adiga" />
                  <span>Ranjit Adiga</span>
                  <small>Treasurer</small>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="event-card">
              <h3 className="card-title">Team Members</h3>
              <p className="card-subtext">
                Dedicated volunteers who bring our events to life.
              </p>

              <img
                src="Our-Story2.png"
                className="card-image"
                alt="Team Members"
              />
              <button className="primary-btn">View All Members</button>
            </div>

            {/* Card 4 */}
            <div className="event-card">
              <h3 className="card-title">Team Spirit</h3>
              <img
                src="Our-Story3.png"
                alt="Team Spirit"
                className="card-image"
              />
              <div className="bottom-row">
                <span className="year-text">Executive Committee 2022</span>
                <button className="primary-btn">Meet Our Past Team ›</button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};


export default About;
