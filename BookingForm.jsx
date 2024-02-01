import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookingForm = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    movieName: "",
  });

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="booking-form">
      <h2>Booking Form for {show ? show.name : "Loading..."}</h2>
      <form onSubmit={handleSubmit}>
        <label>Movie Name:</label>
        <input
          type="text"
          name="movieName"
          value={show ? show.name : ""}
          readOnly
        />
        <br />
        <label>Time:</label>
        <input
          type="text"
          name="movieTime"
          value={show ? show.schedule.time : ""}
          readOnly
        />
        <br />
        <label>Run-Time:</label>
        <input
          type="text"
          name="movieRunTime"
          value={show ? show.runtime + " Minutes" : ""}
          readOnly
        />
        <br />
        <label>Language:</label>
        <input
          type="text"
          name="movieLanguage"
          value={show ? show.language : ""}
          readOnly
        />
        <br />
        <label>Rating:</label>
        <input
          type="text"
          name="movieRating"
          value={show ? show.rating.average + " /10" : ""}
          readOnly
        />
        <br />
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <br />
        
        {/* Add more form fields as needed */}
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
