import { Link } from "react-router-dom";

import education from "../assets/Education.jpeg";
import homeservices from "../assets/homeservices.png";
import wedding from "../assets/wedding.png";

function Home() {
  return (
    <section className="hero">
      <h1>Community Help Hub</h1>

      <p>
        A simple platform that helps people request support, offer their skills,
        and connect with useful community services.
      </p>

      <section className="cards">
        
        <Link to="/education" className="card card-link">
          <img
            src={education}
            alt="Education Help"
            className="service-image"
          />

          <h3>Education Help</h3>

          <p>
            Find support for tutoring, homework, and online learning.
          </p>
        </Link>

        
        <Link to="/home-services" className="card card-link">
          <img
            src={homeservices}
            alt="Home Services"
            className="service-image"
          />

          <h3>Home Services</h3>

          <p>
            Get help with cleaning, moving, babysitting, and daily home tasks.
          </p>
        </Link>

        
        <Link to="/wedding-services" className="card card-link">
          <img
            src={wedding}
            alt="Wedding Services"
            className="service-image"
          />

          <h3>Wedding Services</h3>

          <p>
            Discover wedding planning, photography, makeup, decoration,
            cakes, and entertainment services.
          </p>
        </Link>

      </section>

      <div className="home-actions">
        <Link to="/request" className="primary-btn">
          Request Help
        </Link>

        <Link to="/offer" className="secondary-btn">
          Offer Help
        </Link>
      </div>
    </section>
  );
}

export default Home;