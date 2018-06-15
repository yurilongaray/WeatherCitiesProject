import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Previsão por Cidades: </h2>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

//Review: https://www.udemy.com/react-redux/learn/v4/t/lecture/4284626?start=0