import * as React from 'react';

import Main from '../components/Main/Main';
import YearSlider from '../components/YearSlider';
// import MonthPicker from '../components/MonthPicker';
import Chart from '../components/Chart';
// import Upload from '../components/Upload';
// import EventTree from '../components/EventTree';


export interface IProps {
    name: string;
    sliderValue?: number;
}

interface IState {
    activeYear: number;
    activeMonth: string;
    file: any | undefined;
}

class Dashboard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            activeYear: 2018,
            activeMonth: 'October',
            file: undefined
        };
    }

    onYearSliderChange = (activeYear: number) => {
        this.setState({activeYear});
    }

    onMonthChange = (month: string) => {
        console.log(month);
    }

    onFileUpload = (file: any) => {

        this.setState({
            file
        });
    }

    public render() {
        console.log(this.state.file);
        return (
            <Main>
                <div className="hello">
                    <h1>Dashboard</h1>
                    <h3>Year: {this.state.activeYear}</h3>
                    <YearSlider year={this.state.activeYear} onChange={this.onYearSliderChange}/>
                    <Chart />
                    {/* <MonthPicker activeMonth={'September'} activeYear={this.state.activeYear} onChange={this.onMonthChange} /> */}
                    {/* <Upload onFileUpload={this.onFileUpload}/> */}
                    {/* {this.state.file && <EventTree data={this.state.file}/>} */}
                </div>
            </Main>
        );
    }
}

export default Dashboard;
