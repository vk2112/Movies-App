import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  return (
    <div className="show-list">
      <h1>Movies Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.show.id}>
            <Link to={`/details/${show.show.id}`}>
              <h3>{show.show.name}</h3>
              <Link to={`/details/${show.show.id}`}>
              <button className="Details-button">Show-Details</button>
            </Link>
            </Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;

