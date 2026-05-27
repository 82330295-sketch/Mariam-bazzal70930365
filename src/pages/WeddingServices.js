import whiterose from "../assets/whiterose.png.jpeg";
import luxe from "../assets/luxe.jpeg";
import Mariam from "../assets/mariam.png";
import cake1 from "../assets/cake1.png";
import vibes from "../assets/vibes.png.jpeg";
import bloomhaven from "../assets/bloomhaven.jpeg";

function WeddingServices() {
  const weddingCategories = [
    {
      title: "Wedding Planning",
      description:
        "Professional planning and organization for wedding events.",
      path: "/wedding-planning",
      image: whiterose,
    },
    {
      title: "Wedding Photography",
      description:
        "Capture special wedding moments with professional photographers.",
      path: "/wedding-photography",
      image: luxe,
    },
    {
      title: "Bridal Makeup",
      description:
        "Find makeup artists for bridal beauty and wedding preparation.",
      path: "/bridal-makeup",
      image: Mariam,
    },
    {
      title: "Wedding Decoration",
      description:
        "Beautiful flower arrangements and wedding decorations.",
      path: "/wedding-decoration",
      image:bloomhaven ,
    },
    {
      title: "Wedding Cakes",
      description:
        "Custom wedding cake design and dessert preparation services.",
      path: "/wedding-cakes",
      image: cake1,
    },
    {
      title: "DJ Services",
      description:
        "Music, entertainment, and DJ services for weddings and events.",
      path: "/dj-services",
      image: vibes,
    },
  ];

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Wedding Services</h1>

        <p>
          Discover professional wedding services for planning,
          photography, makeup, decoration, cakes, and entertainment.
        </p>
      </div>

      <section className="cards">
        {weddingCategories.map((category, index) => (
          <div
            className="card"
            key={index}
            onClick={() => (window.location.href = category.path)}
          >
            <img
              src={category.image}
              alt={category.title}
              className="card-image"
            />

            <h3>{category.title}</h3>

            <p>{category.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
}

export default WeddingServices;