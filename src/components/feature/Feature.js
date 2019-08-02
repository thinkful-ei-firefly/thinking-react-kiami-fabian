import React from 'react';
import OptionFeature from '../option-feature/OptionFeature';


function Feature(props) {
	const options = props.options.map((item, index) => {
      return <OptionFeature key={index} item={item} keys={props.keys} index={index} selected={props.selected} updateFeature={props.updateFeature} />
    });

	  return <div className="feature" key={props.keys}>
	              <div className="feature__name">{props.keys}</div>
	              <ul className="feature__list">
	                { options }
	              </ul>
            </div>
}

export default Feature;