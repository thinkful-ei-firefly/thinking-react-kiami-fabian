import React from 'react';
import Feature from '../feature/Feature';

function SectionMain(props) {
	const features = Object.keys(props.features)
          .map(key => {
            return <Feature key={key} keys={key} options={props.features[key]} selected={props.state.selected[key]} updateFeature={props.updateFeature}/>
          });     

	return (
		<section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            { features }
          </section>
		);
}

export default SectionMain