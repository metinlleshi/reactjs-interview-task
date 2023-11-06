import React from 'react';
import './Shared.css';

function ButtonWithIconOnRight({ label, icon, onClickHandler, customClasses }) {
    if (!customClasses) {
        customClasses = ['button-with-img-on-the-right'];
    }
    else if(customClasses && !customClasses.includes('button-with-img-on-the-right')) {
        customClasses.push('button-with-img-on-the-right');
    }
    return (
        <button onClick={onClickHandler} className={customClasses.join(' ')}>
            <span>{label}</span>
            {icon}
        </button>
    );
}

export default ButtonWithIconOnRight;
