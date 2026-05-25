import Harmony from "../assets/Harmony.png";
import classico from "../assets/classico.png";
import vibes from "../assets/vibes.png.jpeg";


function DJServices() {
  const djServices = [
    {
      name: "DJ Harmony",

      service: "Classic Wedding DJ",
      package:
        "Wedding entrance music, dinner background music, dance playlist, sound system, and basic lighting setup.",
      contact: "Harmony.events@email.com",
      price: "$620 package",
      image: Harmony,
    },

    {
      name: "DJ Classico",

      service: "Premium Wedding Entertainment",
      package:
        "Professional DJ performance, premium speakers, dance floor lighting, microphone setup, and event music coordination.",
      contact: "     classico@email.com",
      price: "$550 package",
      image: classico,
    },

    {
      name: "DJ Vibes",

      service: "Full Wedding Music Package",
      package:
        "Customized wedding playlist, live DJ mixing, party lighting effects, sound system, and guest entertainment.",
      contact: "vibes.events@email.com",
      price: "$499 package",
      image: vibes,
    },
  ];

  function requestDJ(name) {
    alert("Your request has been sent to " + name);
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Wedding DJ Services</h1>

        <p>
          Choose professional DJ and music services to create a joyful wedding
          atmosphere with sound, lighting, and entertainment.
        </p>
      </div>

      <section className="cards">
        {djServices.map((dj, index) => (
          <div className="card" key={index}>
            <img
              src={dj.image}
              alt={dj.name}
              className="service-image"
            />

            <h3>{dj.name}</h3>

            <p>
              <strong>Service:</strong> {dj.service}
            </p>

            <p>
              <strong>Package Includes:</strong> {dj.package}
            </p>


            <p>
              <strong>  Email:</strong> {dj.contact}
            </p>

            <p>
              <strong>Price:</strong> {dj.price}
            </p>

            <button
              className="request-btn"
              onClick={() => requestDJ(dj.name)}
            >
              Request Service
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default DJServices;