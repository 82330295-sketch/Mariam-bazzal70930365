import chemistryImage from "../assets/chemistry.png";
import scienceImage from "../assets/science.png";
import mathImage from "../assets/math.png";
import examImage from "../assets/official-exams.png";
function Education() {
  const educationServices = [
    {
      title: "Math Tutoring",
      image: mathImage,
      description:
        "Get support with math lessons, exercises, and homework from community volunteers.",
      path: "/math-tutoring",
    },
    {

      title: "Chemistry Support",

      image: chemistryImage,
      description:
        "Get help with chemistry lessons, equations, experiments, and homework support.",
      path: "/chemistry-support",
    },
    {

      title: "Science Support",
      image: scienceImage,
      description:
        "Get support with science lessons, experiments, research, and homework.",
      path: "/science-support",
    },
    {

      title: "Brevet & Terminal Support",


      image: examImage,
      description:
        "Find tutors and study support for official Brevet and Terminal exams.",
      path: "/official-exams",
    },
  ];

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Education Help</h1>

        <p>
          Education Help connects students with community members who can support
          learning, homework, language practice, and digital study skills.
        </p>
      </div>

      <section className="cards">
        {educationServices.map((service, index) => (
          <div
            className="card"
            key={index}
            onClick={() => (window.location.href = service.path)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Education;