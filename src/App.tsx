import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';

type ResultStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });
  const getWeather = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/current.json?key=4330ef44085a4c60af7170051212210&q=${city}&aqi=no`)
      .then(response => response.json())
      .then(data => {
        setResults({
        country: data.location.country,
        cityName: data.location.name,
        temperature: data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon
      })
    })
  }
  return (
    <div className="test">
      <Title/>
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results results={results}/>
    </div>
  );
}
export default App;
