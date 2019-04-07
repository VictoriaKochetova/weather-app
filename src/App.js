import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "54d06c0fd92f2737bb4b11425604b194";

class App extends React.Component {
state = {
  temp: undefined,
  city:undefined,
  country:undefined,
  humidity: undefined,
  description: undefined,
  error:undefined
}
gettingWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;

  if(city){
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`);
    const data = await api_url.json();


try{
    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error:""
    });}
    catch (err) {

      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Введите название города."
      });

}
  } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Введите название города."
      });
    }

}
  render() {
    return(
      <div>
        <Info />
        <Form weatherMetod={this.gettingWeather}/>
        <Weather
          temp={this.state.temp}
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}

         />

      </div>
    );
  }
}
export default App;
