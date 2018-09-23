import * as React from 'react';
import history from '../../history';
import {Menu, Icon} from 'antd';
import EventSlider from '../EventSlider'

import './Main.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Main extends React.Component {

    navigateToHome = () => {
        this.navigateTo('');
    };

    navigateToDashboard = () => {
        this.navigateTo('dashboard');
    };

    navigateTo = (uri: string) => {
        history.push(`/${uri}`)
    };

    public render() {
        return (
            <div className="main">
                <div className="main__header">
                    <div className="header">
                        <div className="header__section">
                            <div className="header__brand">
                                <div className="brand__icon">
                                    <Icon style={{fontSize: '1.5em', color: '#FFC923'}} className="header__icon"
                                          type="fund" theme="filled"/>
                                </div>
                                <div className="brand__text">
                                    ImpactDash
                                </div>
                            </div>

                        </div>
                        <div className="header__section">
                            <Menu
                                mode="horizontal"
                            >
                                <Menu.Item key="home" onClick={this.navigateToHome}>
                                    <Icon type="mail"/>Home
                                </Menu.Item>
                                <Menu.Item key="dashboard" onClick={this.navigateToDashboard}>
                                    <Icon type="mail"/>Dashboard
                                </Menu.Item>
                                <Menu.Item key="app" disabled>
                                    <Icon type="appstore"/>Two
                                </Menu.Item>
                                <SubMenu
                                    title={<span className="submenu-title-wrapper"><Icon type="setting"/>Three - Submenu</span>}>
                                    <MenuItemGroup title="Item 1">
                                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup title="Item 2">
                                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                <Menu.Item key="alipay">
                                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Four -
                                        Link</a>
                                </Menu.Item>
                            </Menu>
                        </div>
                        <div className="header__section">
                        </div>
                    </div>
                </div>
                <div className="main__content">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>

                <div className="footer">
                    <div className="footer__slider">
                        <div style={{width: '100%'}}>
                            <EventSlider year={1} onChange={(event: any) => console.log(event)} />
                        </div>
                    </div>
                    <div className="footer__add-event">
                        <div className="circle-button">
                            <div className="circle-button__text">+</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
