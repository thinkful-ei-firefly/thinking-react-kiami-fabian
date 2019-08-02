import React from 'react';
import './OptionSummary.css'

function optionSummary(props) {

    return (
   		<div className="summary__option" key={props.keys}>
            <div className="summary__option__label">{props.keys}  </div>
            <div className="summary__option__value">{props.selected.name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(props.selected.cost) }
            </div>
        </div>
    )}
    
export default optionSummary;

