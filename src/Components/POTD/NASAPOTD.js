import React, { useState, useEffect } from 'react';
import { Player } from 'video-react';
import axios from 'axios';

function NasaPotd() {
  const [potd, setPotd] = useState();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const [copyright, setCopyright] = useState('');

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-03-02')
      .then(response => {
        console.log(response)

        // trying to render a video for POTD
        // if (response.data.media_type === 'video') {
        //   const videoOTD = setPotd(response.data.url);
        // } else if(response.data.media_type === 'image') {
        //   const imageOTD = setPotd(response.data.url)
        // }
        
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
      <h2>{title}</h2>
      <p>{date}</p>

      <div>
        <img src={potd} alt={'NASA Photo of the Day'}></img>
      </div>

      {/* <div>
        <Player 
          playsInline
          src={videoOTD}
        />
      </div> */}

      <div>
        <p>{details}</p>
      </div>

      <div>
        <p>{copyright}</p>
      </div>
    </div>
  )
}

export default NasaPotd;