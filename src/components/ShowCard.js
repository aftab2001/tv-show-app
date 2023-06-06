import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  console.log(show);
  return (
    <div className='card  border-none m-4 shadow-lg' style={{width:"18rem",color:"white",backgroundColor:"transparent"}}>
      {show.image &&   <img src={show.image.medium} className='card-img-top' style={{objectFit:"cover",width:"100%"}}/>}
      <div className='card-body'>
      <h2 >{show.name}</h2>
      <span className='card-text m-0'><p className='m-0'>Language: {show.language}</p>
      <p  className='m-0 py-1'>Rating: {show.rating.average || "N.A"}</p>
      </span>
      <Link to={`/shows/${show.id}`} className='card-link text-center border rounded-2 py-0 px-2 text-decoration-none focus-ring'>See More</Link>
      </div>
    </div>
  );
};

export default ShowCard;
