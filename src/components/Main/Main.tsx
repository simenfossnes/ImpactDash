import * as React from 'react';

import { Layout } from 'antd';

import logo from '../../assets/logo.svg';
import './Main.css';

class Main extends React.Component {
    public render() {
        const { Header, Content, Footer } = Layout;

        return (
            <div className="main">
                <Layout>
                    <Header className="header">
                        <img src={logo} className="header__logo" alt="logo" />
                        <div className="header__title">
                            ImpactDash
                        </div>
                    </Header>
                    <Content>
                        <div className="container">
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        );
    }
}

export default Main;
