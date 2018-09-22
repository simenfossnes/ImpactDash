import * as React from 'react';

import logo from '../../assets/logo.svg';

import './Header.css';
// export interface IProps {
//     name: string;
//     enthusiasmLevel?: number;
// }

interface IState {
    activeMenuItem: number;
}

class Header extends React.Component<{}, IState> {
    public render() {
        return (
            <div className="header">
                <div className="header__section">
                    <img src={logo} className="header__logo" alt="logo" />
                    ImpactDash
                </div>
                <div className="header__section">
                    <div className="header__menu-item">
                        Menu1
                    </div>
                    <div className="header__menu-item">
                        Menu2
                    </div>
                </div>
                <div className="header__section">
                    <div className="header__user">
                        username or sth
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
