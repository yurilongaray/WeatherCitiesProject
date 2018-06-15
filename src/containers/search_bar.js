import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: 'London'};

        //A linha abaixo permite que a função onInputChange possa usar o this no state do componente (aula 53)
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) { //Toda classe DOM necessita do parâmetro event 
        //console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault(); //Faz com que o browser não submita o form
        this.props.fetchWeather(this.state.term); //Chamando a ActionCreator e passando o term para cidade
        this.setState({ term: '' }); //Quando finalizar, retornar termo vazio

    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input 
                    placeholder='Veja previsão do tempo em sua cidade'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange}
                /> 
                
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
/*
Importante:
Se existir um callback (onChange), que faz referência a uma função (onInputChange)
essa função necessita ser bindada ( this.onInputChange = this.onInputChange.bind(this); ) 
para então se utilizar a funcionalidade this
*/