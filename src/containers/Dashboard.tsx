import * as React from 'react';

// import Main from '../components/Main/Main';
// import YearSlider from '../components/YearSlider';
// import MonthPicker from '../components/MonthPicker';
import Chart from '../components/Chart';
// import Upload from '../components/Upload';
// import EventTree from '../components/EventTree';
import { Icon } from 'antd';

// import * as data from '../data.json';
let data = require('../data.json');


export interface IProps {
    name: string;
    sliderValue?: number;
}

interface IState {
    activeEvent: number;
    activeEventDetails: number | undefined;
}

class Dashboard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            activeEvent: 1,
            activeEventDetails: undefined
        };
    }

    onSliderChange = (activeEvent: number) => {
        this.setState({activeEvent, activeEventDetails: undefined});
    }

    getTotals(data: any, key: string) {
        let amount = 0;

        data.forEach((e: any) => {
            amount += e[key];
        })

        return amount;
    }

    getInfoBlock() {
        const filteredData = data.filter((e: any) => e['#'] < this.state.activeEvent);
        if (this.state.activeEventDetails) {
            const activeDataObj = data.find((e:any) => e['#'] === this.state.activeEventDetails);
            return (
                <React.Fragment>
                    <div className="div-block-3">
                        <div className="text-block-2">Event Name</div>
                        <h3 className="heading-3">{activeDataObj['Event'] || '-'}</h3>
                    </div>
                    <div className="div-block-3">
                        <div className="text-block-2">Number of Participants</div>
                        <h3 className="heading-3">{activeDataObj['Participants']}</h3>
                    </div>
                    <div className="div-block-3">
                        <div className="text-block-2">Teams Graduated</div>
                        <h3 className="heading-3">{activeDataObj['Teams graduated'] || 0}</h3>
                    </div>
                    <div className="div-block-3">
                        <div className="text-block-2">Pre-Seed</div>
                        <h3 className="heading-3">{activeDataObj['Pre-seed'] || 0}</h3>
                    </div>
                    <div className="div-block-3">
                        <div className="text-block-2">A-Series</div>
                        <h3 className="heading-3">{activeDataObj['A-series'] || 0}</h3>
                    </div>
                    <div className="div-block-3">
                        <div className="text-block-2">Exit</div>
                        <h3 className="heading-3">{activeDataObj['Exit'] || 0}</h3>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <div className="div-block-3">
                        <div className="text-block-2">Total Number of Participants</div>
                        <h3 className="heading-3">{this.getTotals(filteredData, '#')}</h3>
                    </div>
                    <div className="div-block-3">
                        <div className="text-block-2">Total Teams Graduated</div>
                        <h3 className="heading-3">{this.getTotals(filteredData, 'Teams graduated')}</h3>
                    </div>
                    <div className="div-block-3">
                        <div className="text-block-2">Total Pre-Seeds</div>
                        <h3 className="heading-3">{this.getTotals(filteredData, 'Pre-seed')}</h3>
                    </div>
                    <div className="div-block-3">
                        <div className="text-block-2">Total A-Series</div>
                        <h3 className="heading-3">{this.getTotals(filteredData, 'A-series')}</h3>
                    </div>
                    <div className="div-block-3">
                        <div className="text-block-2">Total Exits</div>
                        <h3 className="heading-3">{this.getTotals(filteredData, 'Exit')}</h3>
                    </div>
                </React.Fragment>
            )
        }
    }

    onBubbleClick = (eventHash: any) => {
        console.log('dashboard bubble click', eventHash);
        this.setState({
            activeEventDetails: eventHash
        })
    }

    public render() {
        return (
            <div>
                <div className="viz-header">
                    <div className="viz-header__left"></div>
                    <div className="viz-header__middle">
                        <span className="logo">
                            <Icon style={{ fontSize: '1.5em', color: '#FFC923' }} className="brand__icon"
                                type="fund" theme="filled" />
                            <span className="logo-bold">
                            Impact
                            </span>
                            Dash
                        </span>
                    </div>
                    <div className="viz-header__right"></div>
                </div>
                <div className="viz-main">
                    <div className="viz-main__main">
                        <div className="viz-main__main__sidebar">
                            <div className="div-block">
                                <div className="viz__org-logo"><img style={{width: '60px', height: '60px'}} src="https://pbs.twimg.com/profile_images/970734354023501824/u4_BhEEW_400x400.jpg"/></div>
                                <div className="div-block-2">
                                    <div>
                                        <div className="text-block-2">organization</div>
                                        <h1 className="heading-2">Garage48</h1>
                                    </div>
                                </div>
                            </div>
                            {this.getInfoBlock()}
                        </div>
                        <div className="viz-main__main__main">
                            <Chart onBubbleClick={this.onBubbleClick} onSliderChange={this.onSliderChange}/>
                        </div>
                    </div>
                </div>
                <div className="viz-footer">

                </div>
            </div>

        );
    }
}


export default Dashboard;
