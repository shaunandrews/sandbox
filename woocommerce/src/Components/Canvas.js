import React from 'react';
import classnames from 'classnames';

// Components
import Preview from './Preview/Preview';

// CSS
import './Canvas.scss';

// default props
Canvas.defaultProps = {
    mode: 'default',
    screenName: 'Canvas',
};

function Canvas({ mode, screenName, onClick }) {
    return (
        <div
            className={
                classnames(
                    "canvas",
                    { [`${mode}`]: mode },
                )}
            onClick={onClick}
        >
            <div className="canvas__content">
                <Preview screenName={screenName} />
            </div>
        </div>
    );
}

export default Canvas;
