import React, { useContext, useEffect } from 'react';
import { ShowContext } from '../context/ShowContext';
import ShowCard from '../components/ShowCard';

const HomePage = () => {
  const { shows, fetchShows } = useContext(ShowContext);

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  return (
    <div style={{backgroundColor:"#28282B",width:"100vw",padding:"0 10vw 10vw 10vw"}}>
      <h1 className='text-center' style={{color:"#FFD700"}}>TV Show Catalog</h1>
      {shows.map((show) => (
        <div key={show.id} className='d-inline-flex justify-content-between'>
         <ShowCard show={show}/>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
