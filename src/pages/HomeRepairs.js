function HomeRepairs() {
  const repairHelpers = [
    {
      name: "Ahmad and His Team",
      service: "Furniture Repair Services",
      time: "Monday to Friday, 10 AM - 3 PM",
      location: "In Person",
      contact: "ahmad.team@email.com",
      price: "$40 per visit",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    },

    {
      name: "Omar and His Team",
      service: "Electrical Maintenance Services",
      time: "Tuesday and Thursday, 1 PM - 6 PM",
      location: "In Person",
      contact: "omar.team@email.com",
      price: "$55 per service",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    },

    {
      name: "Karim and His Team",
      service: "Plumbing Services",
      time: "Saturday and Sunday, 9 AM - 5 PM",
      location: "In Person",
      contact: "karim.team@email.com",
      price: "$35 per repair",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    },

    {
      name: "Rami and His Team",
      service: "Wall Painting Services",
      time: "Monday and Wednesday, 12 PM - 4 PM",
      location: "In Person",
      contact: "rami.team@email.com",
      price: "$60 per painting session",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    },

    {
      name: "Hassan and His Team",
      service: "Home Maintenance Services",
      time: "Friday and Saturday, 8 AM - 2 PM",
      location: "In Person",
      contact: "hassan.team@email.com",
      price: "$50 maintenance visit",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    },

    {
      name: "Ali and His Team",
      service: "Complete Home Repair Services",
      time: "Daily, 9 AM - 6 PM",
      location: "In Person",
      contact: "ali.team@email.com",
      price: "$120 complete service",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    },
  ];

  function requestRepair(helperName) {
    alert("Your request has been sent to " + helperName);
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Home Repairs</h1>

        <p>
          Find trusted repair teams for furniture repair, plumbing,
          painting, electrical maintenance, and complete home repair services.
        </p>
      </div>

      <section className="cards">
        {repairHelpers.map((helper, index) => (
          <div className="card" key={index}>
            <img
              src={helper.image}
              alt={helper.name}
              className="service-image"
            />

            <h3>{helper.name}</h3>

            <p>
              <strong>Service:</strong> {helper.service}
            </p>

            <p>
              <strong>Time:</strong> {helper.time}
            </p>

            <p>
              <strong>Location:</strong> {helper.location}
            </p>

            <p>
              <strong>Email:</strong> {helper.contact}
            </p>

            <p>
              <strong>Price:</strong> {helper.price}
            </p>

            <p>
              <strong>Rating:</strong> {helper.rating}
            </p>

            <button
              className="request-btn"
              onClick={() => requestRepair(helper.name)}
            >
              Request Service
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default HomeRepairs;