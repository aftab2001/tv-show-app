import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ShowContext = createContext();

const ShowContextProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
      const data = response.data.map((item) => item.show);
      setShows(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getShowById = (id) => {
    return shows.find((show) => show.id === parseInt(id));
  };

  const selectShow = (show) => {
    setSelectedShow(show);
  };

  const contextValues = {
    shows,
    selectedShow,
    fetchShows,
    getShowById,
    selectShow,
  };

  return <ShowContext.Provider value={contextValues}>{children}</ShowContext.Provider>;
};

export default ShowContextProvider;
