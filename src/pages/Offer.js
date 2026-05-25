import { useState } from "react";

function Offer() {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [category, setCategory] = useState("");
  const [contact, setContact] = useState("");
  const [offers, setOffers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newOffer = {
      name: name,
      skill: skill,
      category: category,
      contact: contact,
    };

    setOffers(offers.concat(newOffer));

    setName("");
    setSkill("");
    setCategory("");
    setContact("");
  }

  function deleteOffer(indexToDelete) {
    const updatedOffers = offers.filter((offer, index) => {
      return index !== indexToDelete;
    });

    setOffers(updatedOffers);
  }

  return (
    <section className="form-container">
      <div className="page-header">
        <h1>Offer Help</h1>

        <p>
          Share your skills with the community so others can find support more
          easily.
        </p>
      </div>

      <form className="help-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="What can you help with?"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          required
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Choose a category</option>
          <option value="Education">Education</option>
          <option value="Home Services">Home Services</option>
          <option value="Tech Support">Tech Support</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          placeholder="Contact Information"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />

        <button type="submit">Submit Offer</button>
      </form>

      {offers.length === 0 ? (
        <p className="empty-message">
          No offers submitted yet. Be the first to support your community.
        </p>
      ) : (
        <section className="cards">
          {offers.map((offer, index) => (
            <div className="card" key={index}>
              <span className="category-tag">{offer.category}</span>

              <h3>{offer.skill}</h3>

              <p>
                <strong>Name:</strong> {offer.name}
              </p>

              <p>
                <strong>Contact:</strong> {offer.contact}
              </p>

              <button
                className="delete-btn"
                onClick={() => deleteOffer(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </section>
      )}
    </section>
  );
}

export default Offer;