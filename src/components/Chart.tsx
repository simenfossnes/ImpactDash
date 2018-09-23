import * as React from 'react';

import {
    ScatterChart,
    CartesianGrid,
    YAxis,
    XAxis,
    // ZAxis,
    Tooltip,
    Legend,
    Scatter
} from 'recharts';
import YearSlider from '../components/YearSlider';
// import * as data from '../data.json';

let data = require('../data.json')
data = data.map((e: any) => {
    e["Start date"] = e["Start date"].split('.')[2];
    return e;
})

// const data = [
//     { x: 2010, y: 100, z: 2000 },
//     { x: 2011, y: 220, z: 2000 },
//     { x: 2012, y: 300, z: 2000 },
//     { x: 2013, y: 350, z: 2000 },
//     { x: 2014, y: 400, z: 2000 },
//     { x: 2015, y: 580, z: 2000 },
//     { x: 2016, y: 780, z: 2000 },
//     { x: 2017, y: 880, z: 2000 },
//     { x: 2018, y: 980, z: 2000 }
// ]

const onBigBubbleClick = (props: any) => {
    console.log(props);
}

const BigBubble = (props: any) => {
    return <circle className="big-bubble" onClick={() => onBigBubbleClick(props)} cx={props.cx} cy={props.cy} fill="#FFC923" />
}

interface IProps {
    // activeEvent:
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
    // console.log(data[]);x
    onSliderChange = (hash: any) => {
        this.setState({
            activeEvent: hash
        });
    }

    render() {
        let filteredData = data.filter((e: any) => e['#'] < this.state.activeEvent);

        return (
            <React.Fragment>
                    <ScatterChart
                        width={850}
                        height={400}
                        margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                        <CartesianGrid vertical={false}  />
                        <XAxis dataKey="Start date" name="stature" unit="" />
                        <YAxis dataKey="Participants" name="weight" unit="" />
                        {/* <ZAxis dataKey="z" range={[64, 144]} name="score" unit="" /> */}
                        <Tooltip active={true} cursor={{ strokeDasharray: '3 3' }} />
                        <Legend />
                        <Scatter shape={<BigBubble />} width={200} height={200} strokeWidth={200} data={filteredData} fill="#8884d8" />
                        {/* <Scatter name="B school" data={data02} fill="#82ca9d" /> */}
                    </ScatterChart>
                    <div style={{width: '100%'}}>
                        <YearSlider onChange={this.onSliderChange} min={1} max={data.length}/>
                    </div>
            </React.Fragment>
        );
    }
}

export default Chart;
