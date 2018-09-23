import * as React from 'react';
import { Icon } from 'antd';

export default function BrandLogo(props: any) {
    const iconFontSize = props.big ? '2em' : '1.5em';
    const textFontSize = props.big ? '3em' : '1.5em';

    return (
        <span onClick={props.onClick} className="logo" style={{fontSize: textFontSize}}>
            <Icon
                style={{ fontSize: iconFontSize, color: '#FFC923' }}
                className="logo__icon"
                type="fund" theme="filled"
            />
            <span className="logo-bold">
                Impact
            </span>
            Dash
        </span>
    )
}
