import React from 'react';

export const Button = ({ value, classes, onclick = false }) => {
    return (
        <button onClick={onclick} className={classes}>{value}</button>
    )

}

