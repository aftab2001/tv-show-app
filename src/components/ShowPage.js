import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShowContext } from '../context/ShowContext';
import ShowDetails from './ShowDetails';

const ShowPage = () => {
  const { id } = useParams();
  const { getShowById, selectShow } = useContext(ShowContext);

  const show = getShowById(id);

  useEffect(() => {
    selectShow(show);
  }, [show, selectShow]);

  if (!show) {
    return <p>Loading show details...</p>;
  }

  return (
    <div className="show-page">
      <ShowDetails show={show} />
    </div>
  );
};

export default ShowPage;
