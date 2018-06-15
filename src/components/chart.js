import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function avarage(data) {
    console.log(data);
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    
    return (
        <div>  
            <Sparklines data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type='avg' />
            </Sparklines>
            <div>{avarage(props.data)} {props.unidade} </div>
        </div>
    );
}