function MathTutoring() {
  const tutors = [
    {
      name: "Ahmad Khalil",
      subject: "Algebra",
      grades: "Grades 7 - 9",
      time: "Monday and Wednesday, 5 PM - 7 PM",
      mode: "Online",
      email: "AhmadKhalil@email.com",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "Sara Haddad",
      subject: "Geometry",
      grades: "Grades 8 - 10",
      time: "Tuesday and Thursday, 4 PM - 6 PM",
      mode: "In Person",
      email: "SaraHaddad@email.com",
      rating: "⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    },
    {
      name: "Mirna Mansour",
      subject: "Calculus",
      grades: "Grades 11 - 12",
      time: "Saturday, 10 AM - 1 PM",
      mode: "Online",
      email: "MirnaMansour@email.com",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
    },
  ];

  function requestTutor(tutorName) {
    alert("Your request has been sent to " + tutorName);
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Math Tutoring</h1>

        <p>
          Choose a tutor based on subject, grade level, availability, and learning mode.
        </p>
      </div>

      <section className="cards">
        {tutors.map((tutor, index) => (
          <div className="card" key={index}>
            <img
              src={tutor.image}
              alt={tutor.name}
              className="service-image"
            />

            <h3>{tutor.name}</h3>

            <p>
              <strong>Subject:</strong> {tutor.subject}
            </p>

            <p>
              <strong>Grades:</strong> {tutor.grades}
            </p>

            <p>
              <strong>Time:</strong> {tutor.time}
            </p>

            <p>
              <strong>Mode:</strong> {tutor.mode}
            </p>

            <p>
              <strong>Email:</strong> {tutor.email}
            </p>

            <p>
              <strong>Rating:</strong> {tutor.rating}
            </p>

            <button
              className="request-btn"
              onClick={() => requestTutor(tutor.name)}
            >
              Request Tutor
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default MathTutoring;