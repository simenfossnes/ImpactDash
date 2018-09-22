import * as React from 'react';

import Main from '../components/Main/Main';
import YearSlider from '../components/YearSlider';

export interface IProps {
    name: string;
    sliderValue?: number;
}

interface IState {
    year: number;
}

class Dashboard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            year: 2018
        };
    }

    onYearSliderChange = (year: number) => {
        this.setState({year});
    }

    public render() {
        return (
            <Main>
                <div className="hello">
                    <h1>Dashboard</h1>
                    <h3>Year: {this.state.year}</h3>
                    <YearSlider year={this.state.year} onChange={this.onYearSliderChange}/>
                </div>
            </Main>
        );
    }
}

export default Dashboard;
