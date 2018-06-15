import { FETCH_WEATHER } from '../actions/index';

//Reducers são apenas funções
export default function(state = [], action) { //state é o array de cidades
    //console.log('Action received: ', action);
    switch(action.type) {
        case FETCH_WEATHER:
        //concat chama o array e adiciona itens nele
        return state.concat([action.payload.data]); //Armazena as cidades
        /*
        O return com concat é o mesmo que:
        return [ action.payload.data, ...state ];
        */
    }
    return state;
}
