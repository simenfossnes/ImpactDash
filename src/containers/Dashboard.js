import React from 'react';

class Dashboard extends React.Component {
    
    state = {
        data: {
            1: {
                someDataSet: {
                    value: 1,
                }
            },
            2: {
                someDataSet: {
                    value: 34,
                }
            },
            3: {
                someDataSet: {
                    value: 22,
                }
            }
        },
        sliderValue: 1,
    }

    setSliderValue = (event) => {
        this.setState({sliderValue: event.target.value});
    };
    
    render () {
        const { data, sliderValue } = this.state;
        return (
            <div>
                <h1>Dashboard</h1>
                <h3>The current value, based on the slider, is:</h3>
                <h4>{data[sliderValue].someDataSet.value}</h4>
                <input type="range" min={1} max={3} value={sliderValue} onChange={this.setSliderValue}/>
            </div>
        )    
    }                
};

export default Dashboard;