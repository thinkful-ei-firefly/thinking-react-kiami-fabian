import React from 'react';
import SectionTotal from '../summary-total/summaryTotal';
import OptionSummary from '../option-summary/optionSummary';
import './SummaryMain.css'

function SummaryMain(props) {
	const summary = Object.keys(props.state.selected)
          .map(key => <OptionSummary key={key} keys={key} selected={props.state.selected[key]} />)
    
    const total = Object.keys(props.state.selected)
        .reduce((acc, curr) => acc + props.state.selected[curr].cost, 0);  

    return (
 		<section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {summary}
            <SectionTotal total={total}/>
        </section>
    )}
    
export default SummaryMain;

