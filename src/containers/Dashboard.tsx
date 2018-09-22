import * as React from 'react';

import Main from '../components/Main/Main';

export interface IProps {
    name: string;
    sliderValue?: number;
}

interface IState {
    data: object;
    sliderValue: number;
}

class Dashboard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            data: {
                1: {
                    someDataSet: {
                        someValue: 14,
                    }
                },
                2: {
                    someDataSet: {
                        someValue: 133,
                    }
                },
                3: {
                    someDataSet: {
                        someValue: 561,
                    }
                }
            },
            sliderValue: props.sliderValue || 1
        };
    }

    public render() {
        const { data, sliderValue } = this.state;

        return (
            <Main>
                <div className="hello">
                    <h1>Dashboard</h1>
                    <h3>Data based on slider value:</h3>
                    <h4>{data[sliderValue].someDataSet.someValue}</h4>
                    <input type="range" min={1} max={3} value={sliderValue} onChange={this.setSliderValue}/>
                </div>
            </Main>
        );
    }

    private setSliderValue = (event: any) => {
        this.setState({ sliderValue: event.target.value });
    }
}

export default Dashboard;
