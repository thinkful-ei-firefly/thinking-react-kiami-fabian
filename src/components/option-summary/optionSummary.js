import React from 'react';
import SectionTotal from '../summary-total/summaryTotal';
import './OptionSummary.css'

function optionSummary(props) {
	const summary = Object.keys(props.state.selected)
          .map(key => <div className="summary__option" key={key}>
            <div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{props.state.selected[key].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(props.state.selected[key].cost) }
            </div>
        </div>)

    return (
 		<section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {summary}
            <SectionTotal total={props.total}/>
        </section>
    )}
    
export default optionSummary;

