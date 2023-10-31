import React from 'react';
import classnames from 'classnames';

// CSS
import './Stack.scss';

// A Stack component that accepts and optional direction prop (default is column) and a gap prop (default is 0).

function Stack({
    children,
    direction = 'vertical',
    centered = false,
    gap = 'default',
    onClick,
    className,
    ...props
}) {
    const classes = classnames(
        'stack',
        `${direction}`,
        { 'centered': centered },
        `gap-${gap}`,
        className,
    );

    return (
        <div
            className={classes}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Stack;