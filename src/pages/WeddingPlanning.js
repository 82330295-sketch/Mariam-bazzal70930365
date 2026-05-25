import elegant from "../assets/elegent.png";
import whiterose from "../assets/whiterose.png.jpeg";
import Royal from "../assets/Royal.png";


function WeddingPlanning() {
  const planners = [
    {
      name: "Elegant Moments",
      experience: "6 Years",
      service: "Full Wedding Planning",
      package:
        "Venue organization, guest coordination, timeline management, and decoration planning.",
      contact: "elegantmoments@email.com",
      price: "$1500 package",
      image: elegant,
    },
    {
      name: "White Rose Events",
      experience: "4 Years",
      service: "Budget Wedding Planning",
      package:
        "Basic wedding setup, schedule planning, and vendor coordination.",
      contact: "whiterose@email.com",
      price: "$900 package",
      image: whiterose,
    },
    {
      name: "Royal Wedding Planner",
      experience: "5 Years",
      service: "Luxury Wedding Planning",
      package:
        "Luxury venue planning, premium decoration, entertainment, and full event management.",
      contact: "royalwedding@email.com",
      price: "1000$ package",
      image: Royal,
    },
  ];

  function requestPlanner(name) {
    alert("Your request has been sent to " + name);
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Wedding Planning</h1>
        <p>
          Find professional wedding planners to organize your special day from
          start to finish.
        </p>
      </div>

      <section className="cards">
        {planners.map((planner, index) => (
          <div className="card" key={index}>
            <img
              src={planner.image}
              alt={planner.name}
              className="service-image"
            />

            <h3>{planner.name}</h3>

            <p><strong>Service:</strong> {planner.service}</p>
            <p><strong>Package Includes:</strong> {planner.package}</p>
            <p><strong>Experience:</strong> {planner.experience}</p>
            <p><strong>Email:</strong> {planner.contact}</p>
            <p><strong>Price:</strong> {planner.price}</p>

            <button
              className="request-btn"
              onClick={() => requestPlanner(planner.name)}
            >
              Request Service
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default WeddingPlanning;