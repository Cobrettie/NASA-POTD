import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Nav from './Components/Nav/Nav';
import ImageOfTheDay from "./Components/ImageOfTheDay/ImageOfTheDay";
import Footer from './Components/Footer/Footer';

const apiKey = `?api_key=3fPvhYJW8mvE0coCgyI0w38ZvEu44AGx5ay2Qum8`;

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod${apiKey}`)
      .then(response => {
        console.log(response)
        setData(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  if (!data.url) return <h3>Loading...</h3>

  return (
    <div className='App'>
      <Nav />
      <ImageOfTheDay 
        title={data.title} 
        date={data.date} 
        url={data.url} 
        explanation={data.explanation}
        copyright={data.copyright}
      />
      {/* <Footer /> */}
    </div>
  )
}

export default App;