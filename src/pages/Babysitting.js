function Babysitting() {
  const babysitters = [
    {
      name: "Mayada Mansour",
      nationality: "Lebanese",
      experience: "4 Years",
      service: "Babysitting",
      age: "24 Years Old",
      time: "Monday to Friday, 2 PM - 8 PM",
      contact: "MayadaMansour.baby@email.com",
      price: "770$ per month",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    },

    {
      name: "Ward Mohamad",
      nationality: "Syrian",
      experience: "5 Years",
      service: "Babysitting",
      age: "27 Years Old",
      time: "Saturday to Wednesday, 10 AM - 6 PM",
      contact: "Ward.baby@email.com",
      price: "440$ per month",
      image: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
    },

    {
      name: "Lina Khalil",
      nationality: "Lebanese",
      experience: "6 Years",
      service: "Babysitting",
      age: "29 Years Old",
      time: "Daily, 9 AM - 5 PM",
      contact: "lina.baby@email.com",
      price: "560$ per month",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    },

    {
      name: "Nour Ali",
      nationality: "Palestinian",
      experience: "3 Years",
      service: "Babysitting",
      age: "22 Years Old",
      time: "Monday to Thursday, 5 PM - 11 PM",
      contact: "nour.baby@email.com",
      price: "350$ per month",
      image: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
    },

    {
      name: "Yasmin Sabri",
      nationality: "Lebanese",
      experience: "8 Years",
      service: "Babysitting",
      age: "31 Years Old",
      time: "Friday to Sunday, 8 AM - 4 PM",
      contact: "Yasmin.baby@email.com",
      price: "480$ per month",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    },

    {
      name: "Zalfa  Ahmad",
      nationality: "Syrian",
      experience: "7 Years",
      service: "Babysitting",
      age: "30 Years Old",
      time: "Daily, Full Time",
      contact: "Zalfa.baby@email.com",
      price: "520$ per month",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    },
  ];

  function requestBabysitter(name) {
    alert("Your request has been sent to " + name);
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Babysitting Services</h1>

        <p>
          Find trusted babysitters to care for children and support families
          in a safe and friendly environment.
        </p>
      </div>

      <section className="cards">
        {babysitters.map((babysitter, index) => (
          <div className="card" key={index}>
            <img
              src={babysitter.image}
              alt={babysitter.name}
              className="service-image"
            />

            <h3>{babysitter.name}</h3>

            <p>
              <strong>Nationality:</strong> {babysitter.nationality}
            </p>

            <p>
              <strong>Experience:</strong> {babysitter.experience}
            </p>

            <p>
              <strong>Service:</strong> {babysitter.service}
            </p>

            <p>
              <strong>Age:</strong> {babysitter.age}
            </p>

            <p>
              <strong>Time:</strong> {babysitter.time}
            </p>

            <p>
              <strong>Email:</strong> {babysitter.contact}
            </p>

            <p>
              <strong>Salary:</strong> {babysitter.price}
            </p>

            <button
              className="request-btn"
              onClick={() => requestBabysitter(babysitter.name)}
            >
              Request Service
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Babysitting;