function WeddingServices() {
  const weddingCategories = [
    {
      title: "Wedding Planning",
      description: "Professional planning and organization for wedding events.",
      path: "/wedding-planning",
    },
    {
      title: "Wedding Photography",
      description: "Capture special wedding moments with professional photographers.",
      path: "/wedding-photography",
    },
    {
      title: "Bridal Makeup",
      description: "Find makeup artists for bridal beauty and wedding preparation.",
      path: "/bridal-makeup",
    },
    {
      title: "Wedding Decoration",
      description: "Beautiful flower arrangements and wedding decorations.",
      path: "/wedding-decoration",
    },
    {
      title: "Wedding Cakes",
      description: "Custom wedding cake design and dessert preparation services.",
      path: "/wedding-cakes",
    },
    {
      title: "DJ Services",
      description: "Music, entertainment, and DJ services for weddings and events.",
      path: "/dj-services",
    },
  ];

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Wedding Services</h1>
        <p>
          Discover professional wedding services for planning, photography,
          makeup, decoration, cakes, and entertainment.
        </p>
      </div>

      <section className="cards">
        {weddingCategories.map((category, index) => (
          <div
            className="card"
            key={index}
            onClick={() => (window.location.href = category.path)}
          >
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
}

export default WeddingServices;