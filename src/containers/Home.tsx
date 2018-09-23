import * as React from 'react';

import BrandLogo from '../components/BrandLogo';
import history from '../history';

class Home extends React.Component {
    navigateToDashboard = () => {
        this.navigateTo('dashboard');
    };

    navigateTo = (uri: string) => {
        history.push(`/${uri}`)
    };

    public render() {
        return (
            <div className="landing">
                <BrandLogo onClick={this.navigateToDashboard} big={true}/>
                {/* <h4 onClick={this.navigateToDashboard}>Dashboard</h4> */}
            </div>
        );
    }
}

export default Home;
