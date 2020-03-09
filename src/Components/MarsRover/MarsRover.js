import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MainTitle = styled.h1`
  margin: 40px auto 20px;
  color: #373737;
`;

const MainImg = styled.img`
  margin: 20px auto 80px;
`;

// api_key=3fPvhYJW8mvE0coCgyI0w38ZvEu44AGx5ay2Qum8

function MarsRover() {
  const [latestPhotos, setLatestPhotos] = useState();

  // const allPhotos = [];

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=3fPvhYJW8mvE0coCgyI0w38ZvEu44AGx5ay2Qum8')
      .then(response => {
        // console.log(response)
        const allPics = response.data.photos;
        setLatestPhotos(allPics[4].img_src);
      })
      .catch(err => console.log(err));
  }, [])

  // if (!latestPhotos) return <h3>Loading...</h3>

  return (
    <div>
      <MainTitle>Mars Rover Latest Photo</MainTitle>
      <MainImg src={latestPhotos} alt='Mars Rover Latest Photos' />
    </div>
  )
}

export default MarsRover;