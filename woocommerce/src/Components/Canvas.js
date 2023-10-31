import React from 'react';
import classnames from 'classnames';

// Components
import Preview from './Preview/Preview';
import Icon from './Base/Icon';
import Stack from './Base/Stack';

// CSS
import './Canvas.scss';

// default props
Canvas.defaultProps = {
    mode: 'default',
    screenName: 'Canvas',
};

function Canvas({ mode, setMode, screenName, onClick }) {
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
                <Stack
                    direction="horizontal"
                    gap="medium"
                    className="canvas__controls"
                >
                    <Icon name="pip" size="medium" onClick={() => setMode('pip')} />
                    <Icon name="mini" size="medium" onClick={() => setMode('mini')} />
                    <Icon name="aspect-ratio" size="medium" onClick={() => setMode('default')} />
                    <Icon name="full" size="medium" onClick={() => setMode('full')} />
                </Stack>
            </div>
        </div>
    );
}

export default Canvas;
