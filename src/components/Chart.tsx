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

const data = [
    { x: 2010, y: 100, z: 2000 },
    { x: 2011, y: 220, z: 2000 },
    { x: 2012, y: 300, z: 2000 },
    { x: 2013, y: 350, z: 2000 },
    { x: 2014, y: 400, z: 2000 },
    { x: 2015, y: 580, z: 2000 },
    { x: 2016, y: 780, z: 2000 },
    { x: 2017, y: 880, z: 2000 },
    { x: 2018, y: 980, z: 2000 }
]
const onBigBubbleClick = (props: any) => {
    console.log(props);
}

const BigBubble = (props: any) => {
    return <circle onClick={() => onBigBubbleClick(props)} cx={props.cx} cy={props.cy} r={15} fill="#50e3c2" />
}

function Chart() {
    return (
        <React.Fragment>
            <ScatterChart
                width={800}
                height={400}
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                <CartesianGrid vertical={false}  />
                <XAxis dataKey="x" name="stature" unit="" />
                <YAxis dataKey="y" name="weight" unit="" />
                <ZAxis dataKey="z" range={[64, 144]} name="score" unit="" />
                <Tooltip active={true} cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter shape={<BigBubble />} width={200} height={200} strokeWidth={200} name="A school" data={data} fill="#8884d8" />
                {/* <Scatter name="B school" data={data02} fill="#82ca9d" /> */}
            </ScatterChart>
        </React.Fragment>
    );
}

export default Chart;
