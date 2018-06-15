import React, {Component} from 'react';

export default class GoogleMap extends Component {
    //Integração com GoogleMaps
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12, //Zoom na localização
            center: { //Onde centralizar a localização
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return (
            //Referencia um componente já renderizado (o this.refs.map, neste caso)
            <div ref="map"></div> 
        );
    }
}