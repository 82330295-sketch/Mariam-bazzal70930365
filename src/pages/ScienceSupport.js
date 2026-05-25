function ScienceSupport() {
  const teachers = [
    {
      name: "Nour Ahmad",
      subject: "Biology",
      grades: "Grades 7 - 10",
      time: "Monday and Wednesday, 4 PM - 6 PM",
      mode: "In Person",
      email: "nour.ahmad@email.com",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    },

    {
      name: "Rami Ali",
      subject: "General Science",
      grades: "Grades 9 - 12",
      time: "Tuesday and Thursday, 5 PM - 7 PM",
      mode: "In Person",
      email: "rami.ali@email.com",
      rating: "⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },

    {
      name: "Mariam al  Hassan",
      subject: "General Science",
      grades: "Grades 5 - 8",
      time: "Saturday, 11 AM - 1 PM",
      mode: "Online",
      email: "mariamalhassan@email.com",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
    },
  ];

  function requestTeacher(teacherName) {
    alert("Your request has been sent to " + teacherName);
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Science Support</h1>

        <p>
          Find science teachers for biology, physics, experiments, and homework support.
        </p>
      </div>

      <section className="cards">
        {teachers.map((teacher, index) => (
          <div className="card" key={index}>
            <img
              src={teacher.image}
              alt={teacher.name}
              className="service-image"
            />

            <h3>{teacher.name}</h3>

            <p>
              <strong>Subject:</strong> {teacher.subject}
            </p>

            <p>
              <strong>Grades:</strong> {teacher.grades}
            </p>

            <p>
              <strong>Time:</strong> {teacher.time}
            </p>

            <p>
              <strong>Mode:</strong> {teacher.mode}
            </p>

            <p>
              <strong>Email:</strong> {teacher.email}
            </p>

            <p>
              <strong>Rating:</strong> {teacher.rating}
            </p>

            <button
              className="request-btn"
              onClick={() => requestTeacher(teacher.name)}
            >
              Request Teacher
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default ScienceSupport;