import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section className="landing-page">
      <div className="landing-overlay">

        <nav className="landing-navbar">

          <h2 className="landing-logo">
            Community Help Hub
          </h2>

          <ul className="landing-links">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/">About</a>
            </li>

            <li>
              <a href="/">Contact</a>
            </li>

            <li>
              <Link to="/login" className="login-btn">
                Login
              </Link>
            </li>
          </ul>

        </nav>

        <div className="landing-content">

          <h1>
            Connect.
            <br />
            Support.
            <br />
            Grow.
          </h1>

          <p>
            Join a community where people can request help,
            offer services, and support each other.
          </p>

        </div>
      </div>
    </section>
  );
}

export default LandingPage;