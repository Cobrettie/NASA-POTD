import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MainTitle = styled.h1`
  margin: 40px auto 20px;
`;

const MainImg = styled.img`
  margin: 20px auto 80px;
`;

function MarsRover() {
  const [latestPhotos, setLatestPhotos] = useState();

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=3fPvhYJW8mvE0coCgyI0w38ZvEu44AGx5ay2Qum8')
      .then(response => {
        console.log(response)
        setLatestPhotos(response.data.latest_photos[2].img_src)
      })
  }, [])

  if (!latestPhotos) return <h3>Loading...</h3>

  return (
    <div>
      <MainTitle>Mars Rover Latest Photo</MainTitle>
      <MainImg src={latestPhotos} alt='Mars Rover Latest Photos' />
    </div>
  )
}

export default MarsRover;