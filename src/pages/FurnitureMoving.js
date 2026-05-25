function FurnitureMoving() {
  const movingTeams = [
    {
      name: "Ahmad and His Team",
      service: "Apartment Furniture Moving",
      time: "Monday to Friday, 8 AM - 4 PM",
      location: "In Person",
      contact: "ahmad.moving@email.com",
      price: "$80 per move",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    },

    {
      name: "Omar and His Team",
      service: "Heavy Furniture Transport",
      time: "Tuesday and Thursday, 9 AM - 5 PM",
      location: "In Person",
      contact: "omar.moving@email.com",
      price: "$120 per service",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    },

    {
      name: "Karim and His Team",
      service: "Office Furniture Moving",
      time: "Saturday and Sunday, 10 AM - 6 PM",
      location: "In Person",
      contact: "karim.moving@email.com",
      price: "$150 per move",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    },

    {
      name: "Rami and His Team",
      service: "Home Relocation Services",
      time: "Daily, 8 AM - 7 PM",
      location: "In Person",
      contact: "rami.moving@email.com",
      price: "$200 complete move",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    },

    {
      name: "Hassan and His Team",
      service: "Furniture Packing and Moving",
      time: "Monday and Wednesday, 11 AM - 5 PM",
      location: "In Person",
      contact: "hassan.moving@email.com",
      price: "$90 per service",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    },

    {
      name: "Ali and His Team",
      service: "Complete Furniture Moving Services",
      time: "Daily, 7 AM - 8 PM",
      location: "In Person",
      contact: "ali.moving@email.com",
      price: "$250 full moving service",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    },
  ];

  function requestMoving(teamName) {
    alert("Your request has been sent to " + teamName);
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Furniture Moving</h1>

        <p>
          Find trusted moving teams for transporting, packing,
          and relocating furniture safely and efficiently.
        </p>
      </div>

      <section className="cards">
        {movingTeams.map((team, index) => (
          <div className="card" key={index}>
            <img
              src={team.image}
              alt={team.name}
              className="service-image"
            />

            <h3>{team.name}</h3>

            <p>
              <strong>Service:</strong> {team.service}
            </p>

            <p>
              <strong>Time:</strong> {team.time}
            </p>

            <p>
              <strong>Location:</strong> {team.location}
            </p>

            <p>
              <strong>Email:</strong> {team.contact}
            </p>

            <p>
              <strong>Price:</strong> {team.price}
            </p>

            <p>
              <strong>Rating:</strong> {team.rating}
            </p>

            <button
              className="request-btn"
              onClick={() => requestMoving(team.name)}
            >
              Request Service
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default FurnitureMoving;