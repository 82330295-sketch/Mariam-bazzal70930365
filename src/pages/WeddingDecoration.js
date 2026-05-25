import bloomhaven from "../assets/bloomhaven.jpeg";
import crystal from "../assets/crystal.jpeg";
import ivory from "../assets/ivory .jpeg";

function WeddingDecoration() {
  const decorations = [
    {
      name: "Bloom Haven Decor",
      experience: "6 Years",
      service: "Elegant Wedding Decoration",
      package:
        "Flower arrangements, stage decoration, table styling, entrance setup, and romantic wedding themes.",
      contact: "bloomhaven@email.com",
      price: "$700 package",
      image: bloomhaven,
    },

    {
      name: "Crystal Elegance",
      experience: "8 Years",
      service: "Luxury Wedding Decoration",
      package:
        "Luxury floral decoration, premium wedding stage setup, lighting effects, and customized wedding themes.",
      contact: "crystalelegance@email.com",
      price: "$850 package",
      image: crystal,
    },

    {
      name: "Ivory Touch Events",
      experience: "5 Years",
      service: "Modern Wedding Decoration",
      package:
        "Modern decoration themes, flower coordination, guest table styling, and elegant romantic setups.",
      contact: "ivorytouch@email.com",
      price: "$800 package",
      image: ivory,
    },
  ];

  function requestDecoration(name) {
    alert("Your request has been sent to " + name);
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Wedding Decoration</h1>

        <p>
          Discover professional wedding decoration services for flowers,
          lighting, stage setup, and elegant wedding themes.
        </p>
      </div>

      <section className="cards">
        {decorations.map((decor, index) => (
          <div className="card" key={index}>
            <img
              src={decor.image}
              alt={decor.name}
              className="service-image"
            />

            <h3>{decor.name}</h3>

            <p>
              <strong>Service:</strong> {decor.service}
            </p>

            <p>
              <strong>Package Includes:</strong> {decor.package}
            </p>

            <p>
              <strong>Experience:</strong> {decor.experience}
            </p>

            <p>
              <strong>Email:</strong> {decor.contact}
            </p>

            <p>
              <strong>Price:</strong> {decor.price}
            </p>

            <button
              className="request-btn"
              onClick={() => requestDecoration(decor.name)}
            >
              Request Service
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default WeddingDecoration;