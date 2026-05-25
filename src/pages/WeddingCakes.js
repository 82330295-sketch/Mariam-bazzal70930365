import cake1 from "../assets/cake1.png";
import cake2 from "../assets/cake2.png";
import cake3 from "../assets/cake3.png";

function WeddingCakes() {
    const cakes = [
        {
            name: "The Velvet Tier",
            experience: "6 Years",
            service: "Luxury Wedding Cakes",
            package:
                "Luxury customized wedding cakes, premium decoration, elegant floral styling, and multiple premium flavors.",
            contact: "velvettier@email.com",
            price: "$200 package",
            image: cake1,
        },

        {
            name: "Royal Bakes",
            experience: "8 Years",
            service: "Classic Wedding Cakes",
            package:
                "Classic wedding cake designs, floral decoration, dessert table setup, and personalized wedding themes.",
            contact: "royalbakes@email.com",
            price: "$400 package",
            image:cake2,
        },

        {
            name: "Love & Layers",
            experience: "5 Years",
            service: "Modern Wedding Cakes",
            package:
                "Modern wedding cake styling, customized colors, premium flavors, and elegant dessert presentations.",
            contact: "loveandlayers@email.com",
            price: "$250 package",
            image: cake3,
        },
    ];

    function requestCake(name) {
        alert("Your request has been sent to " + name);
    }

    return (
        <section className="page-section">
            <div className="page-header">
                <h1>Wedding Cakes</h1>

                <p>
                    Find professional wedding cake designers for customized cakes,
                    dessert tables, and luxury wedding presentations.
                </p>
            </div>

            <section className="cards">
                {cakes.map((cake, index) => (
                    <div className="card" key={index}>
                        <img
                            src={cake.image}
                            alt={cake.name}
                            className="service-image"
                        />

                        <h3>{cake.name}</h3>

                        <p>
                            <strong>Service:</strong> {cake.service}
                        </p>

                        <p>
                            <strong>Package Includes:</strong> {cake.package}
                        </p>

                        <p>
                            <strong>Experience:</strong> {cake.experience}
                        </p>

                        <p>
                            <strong>Email:</strong> {cake.contact}
                        </p>

                        <p>
                            <strong>Price:</strong> {cake.price}
                        </p>

                        <button
                            className="request-btn"
                            onClick={() => requestCake(cake.name)}
                        >
                            Request Service
                        </button>
                    </div>
                ))}
            </section>
        </section>
    );
}

export default WeddingCakes;