
function OfficialExams() {
  const tutors = [
    {
      name: "Maya Khalil",
      subject: "Brevet Mathematics",
      grades: "Brevet Students",
      time: "Monday and Wednesday, 5 PM - 7 PM",
      mode:"In Person",
      email: "maya.khalil@email.com",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
    },

    {
      name: "Karim Hassan",
      subject: "Terminal Physics",
      grades: "Terminal Students",
      time: "Tuesday and Thursday, 4 PM - 6 PM",
      mode: "In Person",
      email: "karim.hassan@email.com",
      rating: "⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },

    {
      name: "Fatima haj hassan",
      subject: "Official Exam Preparation",
      grades: "Brevet & Terminal",
      time: "Saturday, 10 AM - 1 PM",
      mode: "Online",
      email: "Fatima.hajHssan@email.com",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    },
  ];

  function requestTutor(tutorName) {
    alert("Your request has been sent to " + tutorName);
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Brevet & Terminal Support</h1>

        <p>
          Find experienced tutors to help students prepare for official exams.
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

export default OfficialExams;