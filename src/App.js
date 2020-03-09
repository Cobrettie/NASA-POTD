import React, {useState, useEffect} from "react";
import axios from 'axios';
import DatePicker from 'react-date-picker';
import "./App.css";
import Nav from './Components/Nav/Nav';
import DateForm from './Components/DateForm/DateForm';
import ImageOfTheDay from "./Components/ImageOfTheDay/ImageOfTheDay";
import Footer from './Components/Footer/Footer';

const apiUrl = `https://api.nasa.gov/planetary/apod`;
const apiKey = `?api_key=3fPvhYJW8mvE0coCgyI0w38ZvEu44AGx5ay2Qum8`;
const datePrefix = "&date=";

// function DateSelector(props) {
//   return (
//     <DatePicker 
//       selected={props.selected}
//       onChange={props.dateFunction}
//     />
//   )
// }

function App() {
  const [data, setData] = useState('');
  const [dateString, setDateString] = useState('');
  const [startDate, setStartDate] = useState('');
  // const [date, setDate] = useState('');

  const getDataFromApi = () => {
    axios
      .get(`${apiUrl}${apiKey}`)
      .then(response => {
        console.log(response)
        setData(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(getDataFromApi, []);

  if (!data.url) return <h3>Loading...</h3>

  return (
    <div className='App'>
      <Nav />
      {/* <DateSelector 
        dateFunction={(date) => setStartDate(date)}
        selected={startDate}
      /> */}
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