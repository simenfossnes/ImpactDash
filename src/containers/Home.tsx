import * as React from 'react';
import './App.css';
import Hello from '../components/Hello';
import logo from '../logo.svg';
import { Button } from 'antd';
import 'antd/dist/antd.css';

class Home extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Button>Hello button!</Button>
                <Hello name="Simon" enthusiasmLevel={1}/>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default Home;
