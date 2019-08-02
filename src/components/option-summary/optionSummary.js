import React from 'react';

function optionSummary(prop) {
    return (
 <div className="summary__total__value">
 { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
     .format(prop.total) }
 </div>
    )};

    export default optionSummary;

