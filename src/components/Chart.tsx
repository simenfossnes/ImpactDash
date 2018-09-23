import * as React from 'react';

import {
    ScatterChart,
    CartesianGrid,
    YAxis,
    XAxis,
    ZAxis,
    Tooltip,
    Legend,
    Scatter
} from 'recharts';
import YearSlider from '../components/YearSlider';

let data = require('../data.json');
data = data.map((e: any) => {
    e["Start date"] = e["Start date"].split('.')[2];
    return e;
})

class BigBubble extends React.Component<any, any> {
    onBigBubbleClick = () => {
        this.props.onClick(this.props);
    }

    render() {
        const classList = ['big-bubble'];
        let radius = this.props['Teams alive at 6m'] * 4;

        if (radius === 0) radius = 1;

        if (this.props.activeElement === this.props['#']) {
            classList.push('is-active');
        }

        if (this.props['Exit'] !== 0) {
            classList.push('has-exits');
        }

        if (this.props['A-series'] !== 0 || this.props['Pre-seed'] !== 0) {
            classList.push('has-seeds');
        }

        return <circle className={classList.join(' ')} onClick={this.onBigBubbleClick} cx={this.props.cx} cy={this.props.cy} r={this.props['Teams alive at 6m'] * 4} />
    }
}

interface IProps {
    onBubbleClick?: any;
    onSliderChange: any;
}

interface IState {
    activeEvent: number;
}

class Chart extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            activeEvent: 1
        }
    }

    onSliderChange = (hash: any) => {
        this.setState({
            activeEvent: hash
        }, () => {
            this.props.onSliderChange(this.state.activeEvent);
        });
    }

    onBigBubbleClick = (event: any) => {
        this.props.onBubbleClick(event['#']);
    }

    render() {
        let dataLength = data.length;
        let filteredData = data.filter((e: any) => e['#'] < this.state.activeEvent);
        const isActive = filteredData['#'] === this.state.activeEvent;

        return (
            <React.Fragment>
                <ScatterChart
                    width={850}
                    height={400}
                    margin={{
                        // top: 20,
                        right: 30,
                        // bottom: 10,
                        // left: 20
                    }}
                >
                    <CartesianGrid vertical={false}  />
                    <XAxis dataKey="Start date" name="Date" unit="" />
                    <YAxis dataKey="Participants" name="Participants" unit="" />
                    <ZAxis dataKey="Teams alive at 6m" range={[0, 100]} name="Teams alive at 6m" unit="" />
                    <Tooltip active={true} cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter shape={<BigBubble onClick={this.onBigBubbleClick} activeElement={this.state.activeEvent} isActive={isActive}/>} width={200} height={200} strokeWidth={200} data={filteredData} fill="#8884d8" />
                </ScatterChart>
                <div style={{width: '80%', marginTop: '40px'}}>
                    <YearSlider onChange={this.onSliderChange} min={1} max={dataLength}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Chart;
