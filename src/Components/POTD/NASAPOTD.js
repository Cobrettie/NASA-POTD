import React, { useState, useEffect } from 'react';
// import { Player } from 'video-react';
import axios from 'axios';

function NasaPotd() {
  const [mediaType, setMediaType] = useState('');
  const [potd, setPotd] = useState();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const [copyright, setCopyright] = useState('');

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=3fPvhYJW8mvE0coCgyI0w38ZvEu44AGx5ay2Qum8&date=2020-03-02')
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
  
  return (
    <div>

      <div>
        <h2>{title}</h2>
        <p>Date: {date}</p>
      </div>

      <div>
        <img src={potd} alt={'NASA Photo of the Day'}></img>
      </div>

      <div>
        <p>Explanation: {details}</p>
      </div>

      <div>
        <p>Copyright: {copyright}</p>
      </div>

    </div>
  )
}

export default NasaPotd;