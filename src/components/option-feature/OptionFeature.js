import React from 'react';

function OptionFeature(props){
	const selectedClass = props.item.name === props.selected.name ? 'feature__selected' : '';
	const featureClass = 'feature__option ' + selectedClass;
	return <li key={props.index} className="feature__item">
	  <div className={featureClass}
	      
	      onClick={e => props.updateFeature(props.keys, props.item)}>
	        { props.item.name }
	        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
	          .format(props.item.cost) })
	    </div>
	  </li>
}

export default OptionFeature;