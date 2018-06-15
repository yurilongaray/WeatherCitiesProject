import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    //Função para tratar cada cidade
    renderWeather(cityData) {
        const name       = cityData.city.name;
        const temps      = _.map( cityData.list.map(weather => weather.main.temp), (temp) => (temp) - 273 );
        const pressures  = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;
        /*
        A linha acima pode ser separada em:
        const lon        = cityData.city.coord.lon;
        const lat        = cityData.city.coord.lat;
        */

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color='orange' unidade='C' /></td>
                <td><Chart data={pressures} color='green' unidade='hPA' /></td>
                <td><Chart data={humidities} color='black' unidade='%' /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                    <th>Cidade</th>
                    <th>Temperatura (C) </th>
                    <th>Pressão (hPa) </th>
                    <th>Umidade % </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>  
        );
    }
}

function mapStateToProps({weather}) { //{weather} é a mesma coisa que state.weather
    return { weather }; //{weather} === {weather: weather};
}

export default connect(mapStateToProps)(WeatherList);