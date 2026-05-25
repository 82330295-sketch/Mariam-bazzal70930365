import Hala from "../assets/hala.png";
import Bassam from "../assets/bassam.png";
import Mariam from "../assets/mariam.png"; 
function BridalMakeup() {
    const makeupArtists = [
        {
            name: "Hala aajam Center",
            experience: "5 Years",
            service: "Bridal Makeup Artist",
            package:
                "Skincare preparation, professional makeup based on the occasion, manicure, pedicure, and customized hairstyles upon request.",
            contact: "Hala beauty@email.com",
            price: "$700 package",
            image:Hala,
        },

        {
            name: "Bassam fatouh Center",
            experience: "7 Years",
            service: "Luxury Bridal Makeup Artist",
            package:
                "Luxury skincare routine, premium bridal makeup, manicure, pedicure, eyelashes, and elegant hairstyles based on client preference.",
            contact: "bibo@email.com",
            price: "$600 package",
            image: Bassam,
        },

        {
            name: "Mariam Beauty Center",
            experience: "4 Years",
            service: "Soft Makeup Artist",
            package:
                "Soft makeup looks, facial skincare, manicure, pedicure, and natural hairstyles suitable for weddings and special occasions.",
            contact: "mariam@email.com",
            price: "$650 package",
            image: Mariam,
        },
    ];

    function requestMakeup(name) {
        alert("Your request has been sent to " + name);
    }

    return (
        <section className="page-section">
            <div className="page-header">
                <h1>Bridal Makeup</h1>

                <p>
                    Find professional makeup artists for skincare, bridal makeup,
                    manicure, pedicure, and customized hairstyles for special occasions.
                </p>
            </div>

            <section className="cards">
                {makeupArtists.map((artist, index) => (
                    <div className="card" key={index}>
                        <img
                            src={artist.image}
                            alt={artist.name}
                            className="service-image"
                        />

                        <h3>{artist.name}</h3>

                        <p>
                            <strong>Service:</strong> {artist.service}
                        </p>

                        <p>
                            <strong>Package Includes:</strong> {artist.package}
                        </p>

                        <p>
                            <strong>Experience:</strong> {artist.experience}
                        </p>

                        <p>
                            <strong>Email:</strong> {artist.contact}
                        </p>

                        <p>
                            <strong>Price:</strong> {artist.price}
                        </p>

                        <button
                            className="request-btn"
                            onClick={() => requestMakeup(artist.name)}
                        >
                            Request Service
                        </button>
                    </div>
                ))}
            </section>
        </section>
    );
}

export default BridalMakeup;