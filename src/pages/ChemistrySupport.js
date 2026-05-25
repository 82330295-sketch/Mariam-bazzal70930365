function ChemistrySupport() {
    const tutors = [
        {
            name: "Mirna Hassan",
            subject: "Organic Chemistry",
            grades: "Grades 10 - 12",
            time: "Monday and Friday, 4 PM - 6 PM",
            mode: "Online",
            email: "mirna.hassan@email.com",
            rating: "⭐⭐⭐⭐⭐",
            image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
        },

        {
            name: "Rami Khaled",
            subject: "Chemical Equations",
            grades: "Grades 9 - 11",
            time: "Tuesday and Thursday, 5 PM - 7 PM",
            mode: "In Person",
            email: "rami.khaled@email.com",
            rating: "⭐⭐⭐⭐",
            image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        },

        {
            name: "Lina Saab",
            subject: "Lab Experiments",
            grades: "Grades 11 - 12",
            time: "Saturday, 11 AM - 2 PM",
            mode: "Online",
            email: "lina.saab@email.com",
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
                <h1>Chemistry Support</h1>

                <p>
                    Find chemistry tutors for lessons, homework, equations, and laboratory support.
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

export default ChemistrySupport;