function CleaningServices() {
  const cleaners = [
    {
      name: "Nour Saleh",
      service: "Full House Cleaning",
      time: "Monday to Friday, 9 AM - 2 PM",
      location: "In Person",
      contact: "nour.clean@email.com",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    },

    {
      name: "Maria Abdallah",
      service: "Home Organization and Cleaning",
      time: "Tuesday and Thursday, 10 AM - 3 PM",
      location: "In Person",
      contact: "maria.clean@email.com",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
    },

    {
      name: "Samar and Her Team",
      service: "Complete Home Cleaning Services",
      time: "Saturday and Sunday, 8 AM - 5 PM",
      location: "In Person",
      contact: "Samar.team@email.com",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    },
  ];

  function requestService(cleanerName) {
    alert("Your request has been sent to " + cleanerName);
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Cleaning Services</h1>

        <p>
          Choose trusted home cleaning services for full house cleaning,
          organization, and maintaining a clean home environment.
        </p>
      </div>

      <section className="cards">
        {cleaners.map((cleaner, index) => (
          <div className="card" key={index}>
            <img
              src={cleaner.image}
              alt={cleaner.name}
              className="service-image"
            />

            <h3>{cleaner.name}</h3>

            <p>
              <strong>Service:</strong> {cleaner.service}
            </p>

            <p>
              <strong>Time:</strong> {cleaner.time}
            </p>

            <p>
              <strong>Location:</strong> {cleaner.location}
            </p>

            <p>
              <strong>Email:</strong> {cleaner.contact}
            </p>

            <p>
              <strong>Rating:</strong> {cleaner.rating}
            </p>

            <button
              className="request-btn"
              onClick={() => requestService(cleaner.name)}
            >
              Request Service
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default CleaningServices;