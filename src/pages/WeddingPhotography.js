import eternal from "../assets/eternal.jpeg";
import luxe from "../assets/luxe.jpeg";
import goldenhour from "../assets/goldenhour.jpeg";
function WeddingPhotography() {
  const photographers = [
    {
      name: "Eternal Frames",
      experience: "7 Years",
      service: "Full Wedding Photography",
      package:
        "Bride and groom photoshoot, ceremony coverage, reception photography, and edited digital album.",
      contact: "eternalframes@email.com",
      price: "$600 package",
      image: eternal,
    },

    {
      name: "Luxe Wedding Studio",
      experience: "5 Years",
      service: "Engagement and Wedding Photography",
      package:
        "Engagement session, wedding highlights, couple portraits, and online photo gallery.",
      contact: "luxewedding@email.com",
      price: "$700 package",
      image: luxe,
    },

    {
      name: "Golden Hour Photography",
      experience: "8 Years",
      service: "Luxury Wedding Photography",
      package:
        "Full-day photography, cinematic wedding shots, premium editing, printed album, and USB delivery.",
      contact: "goldenhour@email.com",
      price: "$800 package",
      image: goldenhour,
    },
  ];

  function requestPhotographer(name) {
    alert("Your request has been sent to " + name);
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Wedding Photography</h1>

        <p>
          Find professional photographers to capture your wedding memories with
          beautiful and high-quality photos.
        </p>
      </div>

      <section className="cards">
        {photographers.map((photographer, index) => (
          <div className="card" key={index}>
            <img
              src={photographer.image}
              alt={photographer.name}
              className="service-image"
            />

            <h3>{photographer.name}</h3>

            <p>
              <strong>Service:</strong> {photographer.service}
            </p>

            <p>
              <strong>Package Includes:</strong> {photographer.package}
            </p>

            <p>
              <strong>Experience:</strong> {photographer.experience}
            </p>

            <p>
              <strong>Email:</strong> {photographer.contact}
            </p>

            <p>
              <strong>Price:</strong> {photographer.price}
            </p>

            <button
              className="request-btn"
              onClick={() => requestPhotographer(photographer.name)}
            >
              Request Service
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default WeddingPhotography;