import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
const ShowDetails = ({ show }) => {
  const removeHTMLTags = (text) => {
    const regex = /<[^>]+>/g;
    return text.replace(regex, '');
  };
  const genres = useMemo(() => {
    if (Array.isArray(show.genres)) {
      return show.genres.map((genre, index) => (
        <span key={index} className="text-bg-secondary py-1 px-2 m-1 rounded">{genre}</span>
      ));
    } else {
      return <span className="genre">No genres available</span>;
    }
  }, [show.genres]);

  return (
    <div className='d-flex flex-wrap' style={{color:"white",margin:"5vw",width:"80vw"}}>
      <div>
      <img className='rounded' src={show.image.medium} style={{height:"60vh",width:'50vh'}}/>
      </div>
    <div className='card-body' style={{maxWidth:"600px",padding:"0 2vw",textAlign:"justify"}}>
    <h2>{show.name}</h2>
      <div className="py-2">
        <strong>Genres: </strong>
        {genres}
      </div>
      <p>{removeHTMLTags(show.summary)}</p>
      <a href={show.url} target="_blank" rel="noopener noreferrer">
        Official Site
      </a>
      <div className="show-details">
      {/* ... */}
      <Link to={`/shows/${show.id}/booking`} className='btn btn-primary mt-2'>Book Ticket</Link>
    </div>
    </div>
    </div>
  );
};

export default ShowDetails;
