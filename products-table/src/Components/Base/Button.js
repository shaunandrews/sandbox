import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from './Icon';
import Stack from './Stack';

// CSS
import './Button.scss';

Button.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    style: PropTypes.oneOf(['default', 'icon-only']),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'secondary',
    style: 'default',
};

function Button({
    children,
    icon,
    type,
    style,
    onClick,
    className,
    ...props
}) {
    const classes = classnames(
        'button',
        type && `is-type-${type}`,
        style && `is-style-${style}`,
        className,
    );

    return (
        <button
            className={classes}
            onClick={onClick}
        >
            <Stack direction='horizontal' gap='default' centered>
                {icon && <Icon name={icon} />}
                {style === 'default' && children}
            </Stack>
        </button>
    );
}

export default Button;