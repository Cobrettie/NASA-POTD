import React, { useState, useEffect } from 'react';
// import { Player } from 'video-react';
import axios from 'axios';
import styled from 'styled-components';

const PageContainDiv = styled.div`
  margin: 0 20px;
`;

const ImgTitle = styled.h2`
  color: #373737;
  font-size: 28px;
`;

const ImgDate = styled.p`
  color: #373737;
  font-size: 20px;
`;

const ImgDetails = styled.p`
  color: #373737;
  font-size: 20px;
`;

function NasaPotd() {
  const [mediaType, setMediaType] = useState('');
  const [potd, setPotd] = useState();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const [copyright, setCopyright] = useState('');

  useEffect(() => {
      // &date=2020-03-02
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=3fPvhYJW8mvE0coCgyI0w38ZvEu44AGx5ay2Qum8')
      .then(response => {
        console.log(response)
        setMediaType(response.data.media_type);
        setPotd(response.data.url);
        setTitle(response.data.title);
        setDate(response.data.date);
        setDetails(response.data.explanation);
        setCopyright(response.data.copyright);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  if (!potd) return <h3>Loading...</h3>
  
  return (
    <PageContainDiv>

      <div>
        <ImgTitle>{title}</ImgTitle>
        <ImgDate>Date: {date}</ImgDate>
      </div>

      <div>
        <img src={potd} alt={'NASA Photo of the Day'}></img>
      </div>

      <div>
        <ImgDetails>Explanation: {details}</ImgDetails>
      </div>

      <div>
        <ImgDetails>{copyright}</ImgDetails>
      </div>

    </PageContainDiv>
  )
}

export default NasaPotd;