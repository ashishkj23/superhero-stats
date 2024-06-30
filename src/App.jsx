import React, { useState } from 'react';
import axios from 'axios';
import Image from './Image';
import Stats from './Stats';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [heroData, setHeroData] = useState(null);
  const [searchAttempted, setSearchAttempted] = useState(false);
  const TOKEN = "fe375175dffd27dffd49230ddf2134c4"
  const BASE_URL = "https://cors-proxy-superhero-api.onrender.com"

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setSearchAttempted(true);
    try {
      const response = await axios.get(`${BASE_URL}/${TOKEN}/getByName/${name}`);
      console.log(response.data);
      if (response.data && response.data.results && response.data.results.length > 0) {
        setHeroData(response.data.results[0]); // Access the first result
      } else {
        setHeroData(null);
      }
    } catch (error) {
      console.error('Error fetching superhero data:', error);
      setHeroData(null);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleClick}>
        <input type="text" value={name} onChange={handleChange} placeholder="Enter superhero name" />
        <button type="submit">Search</button>
      </form>
      {searchAttempted && (
        heroData ? (
          <>
            <Image imageUrl={heroData.image.url} />
            <Stats stats={heroData.powerstats} />
          </>
        ) : (
          <p>No data available for the specified superhero.</p>
        )
      )}
    </div>
  );
};

export default App;


