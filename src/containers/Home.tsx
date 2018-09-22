import * as React from 'react';
import Hello from '../components/Hello';
import Main from '../components/Main/Main';
import { Button } from 'antd';

import './App.css';

class Home extends React.Component {
    public render() {
        return (
            <Main>
                <Button type="primary">Hello button!</Button>
                <Hello name="Simon" enthusiasmLevel={1} />
            </Main>
        );
    }
}

export default Home;
