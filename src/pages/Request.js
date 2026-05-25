import { useState } from "react";

function Request() {
  const [name, setName] = useState("");
  const [helpType, setHelpType] = useState("");
  const [details, setDetails] = useState("");
  const [search, setSearch] = useState("");
  const [requests, setRequests] = useState([]);

  const filteredRequests = requests.filter((request) =>
    request.helpType.toLowerCase().includes(search.toLowerCase())
  );

  function handleSubmit(e) {
    e.preventDefault();

    const newRequest = {
      name: name,
      helpType: helpType,
      details: details,
    };

    setRequests(requests.concat(newRequest));

    setName("");
    setHelpType("");
    setDetails("");
  }

  function deleteRequest(indexToDelete) {
    const updatedRequests = requests.filter((request, index) => {
      return index !== indexToDelete;
    });

    setRequests(updatedRequests);
  }

  return (
    <section className="form-container">
      <div className="page-header">
        <h1>Request Help</h1>

        <p>
          Submit a community support request and describe the type of help you
          need.
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
          placeholder="Type of Help Needed"
          value={helpType}
          onChange={(e) => setHelpType(e.target.value)}
          required
        />

        <textarea
          placeholder="Describe your request"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send Request</button>
      </form>

      <div className="search-section">
        <h2>Search Requests</h2>

        <input
          className="search-input"
          type="text"
          placeholder="Search by help type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredRequests.length === 0 ? (
        <p className="empty-message">
          No requests found. Submit a request or try another search term.
        </p>
      ) : (
        <section className="cards">
          {filteredRequests.map((request, index) => (
            <div className="card" key={index}>
              <h3>{request.helpType}</h3>

              <p>
                <strong>Name:</strong> {request.name}
              </p>

              <p>{request.details}</p>

              <button
                className="delete-btn"
                onClick={() => deleteRequest(index)}
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

export default Request;