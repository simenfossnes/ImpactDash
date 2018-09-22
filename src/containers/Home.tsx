import * as React from 'react';
import { Button } from 'antd';

import Hello from '../components/Hello';
import Main from '../components/Main/Main';
// import Chart from '../components/Chart';

class Home extends React.Component {
    public render() {
        return (
            <Main>
                {/* <Chart /> */}
                <Button type="primary">Hello button!</Button>
                <Hello name="Simon" enthusiasmLevel={1} />
            </Main>
        );
    }
}

export default Home;
