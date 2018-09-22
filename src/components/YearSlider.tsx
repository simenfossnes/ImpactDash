import * as React from 'react';

import { Slider } from 'antd';

export interface IProps {
    year: number;
    onChange: any;
}

interface IState {
    currentEnthusiasm: number;
}

class YearSlider extends React.Component<IProps, IState> {
    // constructor(props: IProps) {
    //     super(props);
    //     this.state = {
    //         currentYear: props.year || 2018
    //     };
    // }
    onChange = (value: any) => {
        this.props.onChange(value);
    }

    public render() {
        return (
            <Slider onChange={this.onChange} defaultValue={this.props.year} min={2011} max={2018}/>
        );
    }
}

export default YearSlider;
