import React from 'react';

function sectionSummary(prop) {
    return (
<section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {prop.summary}
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              </div> </section>
)};

export default sectionSummary;