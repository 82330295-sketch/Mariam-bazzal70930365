import cleaningImage from "../assets/cleaning.png";
import repairImage from "../assets/repair.png";
import movingImage from "../assets/moving.png";
import babysittingImage from "../assets/babysitting.png";

function HomeServices() {
  const services = [
    {
      title: "Cleaning Services",
      image: cleaningImage,
      description:
        "Find helpers for house cleaning, organizing rooms, and maintaining a clean home environment.",
      path: "/cleaning-services",
    },

    {
      title: "Home Repairs",
      image: repairImage,
      description:
        "Get support with fixing furniture, electrical issues, plumbing, and home maintenance tasks.",
      path: "/home-repairs",
    },

    {
      title: "Furniture Moving",
      image: movingImage,
      description:
        "Find trusted helpers for moving furniture and carrying heavy home items safely.",
      path: "/furniture-moving",
    },

    {
      title: "Babysitting",
      image: babysittingImage,
      description:
        "Connect with babysitters who can help care for children and support families at home.",
      path: "/babysitting",
    },
  ];

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Home Services</h1>

        <p>
          Discover trusted community members who can help with household tasks,
          repairs, babysitting, and daily home support.
        </p>
      </div>

      <section className="cards">
        {services.map((service, index) => (
          <div
            className="card"
            key={index}
            onClick={() => (window.location.href = service.path)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
}

export default HomeServices;