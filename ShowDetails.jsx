import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
console.log("id",id);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data));
  }, [id]);

  return (
    <div className="show-details">
      <h2>{show ? show.name : 'Loading...'}</h2>
      <p>{show ? show.summary.replace(/<[^>]*>/g, "") : 'Loading...'}</p>
      <Link to={`/book/${id}`}>
        <button className="book-button">Book a Movie Ticket</button>
      </Link>
    </div>
  );
}

export default ShowDetails;
