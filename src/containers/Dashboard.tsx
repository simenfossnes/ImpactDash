import * as React from 'react';

import Main from '../components/Main/Main';
import YearSlider from '../components/YearSlider';
import MonthPicker from '../components/MonthPicker';
import Upload from '../components/Upload';

export interface IProps {
    name: string;
    sliderValue?: number;
}

interface IState {
    activeYear: number;
    activeMonth: string;
}

class Dashboard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            activeYear: 2018,
            activeMonth: 'October',
        };
    }

    onYearSliderChange = (activeYear: number) => {
        this.setState({activeYear});
    }

    onMonthChange = (month: string) => {
        console.log(month);
    }

    public render() {
        return (
            <Main>
                <div className="hello">
                    <h1>Dashboard</h1>
                    <h3>Year: {this.state.activeYear}</h3>
                    <YearSlider year={this.state.activeYear} onChange={this.onYearSliderChange}/>
                    <MonthPicker activeMonth={'September'} activeYear={this.state.activeYear} onChange={this.onMonthChange} />
                    <Upload />
                </div>
            </Main>
        );
    }
}

export default Dashboard;
