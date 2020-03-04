import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NasaPotd() {
  const [potd, setPotd] = useState();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const [copyright, setCopyright] = useState('');


  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
      .then(response => {
        console.log(response)
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
      <h1>NASA Photo of the Day</h1>
      <h2>{title}</h2>
      <p>{date}</p>

      <div>
        <img src={potd} alt={'NASA Photo of the Day'}></img>
      </div>

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