// import * as React from 'react';
// import { Tree } from 'react-d3-tree';

// export interface IProps {
//     data: any | undefined;
//     // enthusiasmLevel?: number;
// }

// interface IState {
//     data: any;
//     // currentEnthusiasm: number;
// }


// class EventTree extends React.Component<IProps, IState> {
//     constructor(props: IProps) {
//         super(props);

//         this.state = {
//             data: undefined
//         }
//     }

//     // componentWillUpdate(nextProps: IProps) {
//     //     if (this.props.data !== nextProps.data) {
//     //         treeUtil.parseCSV(nextProps.data)
//     //             .then((data: any) => {
//     //                 this.setState({ data })
//     //             })
//     //             .catch((err: any) => console.error(err));
//     //     }
//     // }

//     // componentDidUpdate(nextProps: any) {
//     //     treeUtil.parseCSV(nextProps.data)
//     //         .then((data: any) => {
//     //             this.setState({
//     //                 data: nextProps.data
//     //             });
//     //     });
//     // }

//     // static getDerivedStateFromProps(props: any) {
//     //     treeUtil.parseCSV(props.data).then((data: any) => {
//     //         return {
//     //             data
//     //         }
//     //     })
//     // }

//     render() {
//         // console.log(this.props.data);
//         // treeUtil.parseCSV(this.props.data).then(data => {

//         // });
//         console.log(this.props.data);

//         return (
//             <div id="treeWrapper" style={{ width: '500px', height: '200px' }}>

//                 {this.props.data && <Tree data={this.props.data} />}

//             </div>
//         );
//     }
// }

// export default EventTree;
