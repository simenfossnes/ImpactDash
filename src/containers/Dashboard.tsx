import * as React from 'react';

// import Main from '../components/Main/Main';
// import YearSlider from '../components/YearSlider';
// import MonthPicker from '../components/MonthPicker';
// import Chart from '../components/Chart';
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
            <div>
                <div className="viz-header">
                    <div className="viz-header__left"></div>
                    <div className="viz-header__middle"></div>
                    <div className="viz-header__right"></div>
                </div>
                <div className="viz-main">
                    <div className="viz-main__main">
                        <div className="viz-main__main__sidebar">
                            <div className="div-block">
                                <div className="viz__org-logo"><img style={{width: '8vw', height: '8vw'}} src="https://pbs.twimg.com/profile_images/970734354023501824/u4_BhEEW_400x400.jpg"/></div>
                                <div className="div-block-2">
                                    <div>
                                        <div className="text-block-2">organization</div>
                                        <h1 className="heading-2">Garage48</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="div-block-4">
                                <div className="div-block-3">
                                    <div className="text-block-2">Event Name</div>
                                    <h3 className="heading-3">Oslo Innovation Week</h3>
                                </div>
                                <div className="div-block-3">
                                    <div className="text-block-2">Number of Participants</div>
                                    <h3 className="heading-3">29</h3>
                                </div>
                                <div className="div-block-3">
                                    <div className="text-block-2">Teams Graduated</div>
                                    <h3 className="heading-3">3</h3>
                                </div>
                                <div className="div-block-3">
                                    <div className="text-block-2">Pre-Seed</div>
                                    <h3 className="heading-3">12</h3>
                                </div>
                                <div className="div-block-3">
                                    <div className="text-block-2">A-Series</div>
                                    <h3 className="heading-3">5</h3>
                                </div>
                                <div className="div-block-3">
                                    <div className="text-block-2">Exit</div>
                                    <h3 className="heading-3">1001</h3>
                                </div>
                            </div>
                        </div>
                        <div className="viz-main__main__main"></div>
                    </div>
                </div>
                <div className="viz-footer">
                    <div className="viz-footer__slider"></div>
                    <div className="viz-footer__add-event">
                        <div className="viz-circle-button">
                            <div className="viz-circle-button__text">+</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

{/*<Main>*/}
{/*<div className="hello">*/}
{/*<h1>Dashboard</h1>*/}
{/*<h3>Year: {this.state.activeYear}</h3>*/}
{/*<YearSlider year={this.state.activeYear} onChange={this.onYearSliderChange}/>*/}
{/*<Chart />*/}
{/*/!* <MonthPicker activeMonth={'September'} activeYear={this.state.activeYear} onChange={this.onMonthChange} /> *!/*/}
{/*/!* <Upload onFileUpload={this.onFileUpload}/> *!/*/}
{/*/!* {this.state.file && <EventTree data={this.state.file}/>} *!/*/}
{/*</div>*/}
{/*</Main>*/}

export default Dashboard;
