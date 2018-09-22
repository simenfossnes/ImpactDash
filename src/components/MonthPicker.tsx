    import * as React from 'react';

    import { Radio } from 'antd';
    // import { data } from '../helpers';

    export interface IProps {
        activeMonth?: string;
        activeYear?: number;
        onChange?: any;
    }

    interface IState {
        // currentEnthusiasm: number;
    }

    class MonthPicker extends React.Component<IProps, IState> {
        // constructor(props: IProps) {
        //     super(props);
        //     this.state = {
        //         currentYear: props.year || 2018
        //     };
        // }

        onChange = (ev: any) => {
            console.log(ev.target.value);
            // this.props.onChange(ev.target.value);
        }

        getMonths(): JSX.Element[] {
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return months.map((month: any, i: number) => {
                return <Radio.Button key={i} value={`${month}-${this.props.activeYear}`}>{month}</Radio.Button>
            })
        }

        public render() {
            return (
                <Radio.Group value={this.props.activeMonth} onChange={this.onChange}>
                    {this.getMonths()}
                </Radio.Group>
            );
        }
    }

    export default MonthPicker;
