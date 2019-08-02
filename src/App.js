import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import SectionMain from './components/section-main/SectionMain';
import SectionOption from './components/option-summary/optionSummary';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    const summary = Object.keys(this.state.selected)
          .map(key => <div className="summary__option" key={key}>
            <div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{this.state.selected[key].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.state.selected[key].cost) }
            </div>
        </div>)  
        
        const total = Object.keys(this.state.selected)
        .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);  

    return (
      <div className="App">
        <Header />
        <main>
          <SectionMain features={this.props.features} state={this.state} updateFeature={this.updateFeature}/>
          <SectionOption total={total} state={this.state}/>
        </main>
      </div>
    );
  }
}

export default App;  
