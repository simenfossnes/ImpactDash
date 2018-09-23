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
                <div className="quote">
                    <div className="quote__message">
                        <span className="quotemark quotemark--top text-yellow">“</span>
                            ImpactDash is a bullseye product in light of the next week’s “3S: Manage for Impact Conference”. <br /> I am very interested to have a closer look now!
                        <span className="quotemark quotemark--bottom text-yellow">”</span>
                    </div>
                    <div className="quoter">
                        <span className="text-yellow">Håkon Iversen</span> - SoCentral, Norway
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
