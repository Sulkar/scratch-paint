import React from 'react';
import PropTypes from 'prop-types';

import Input from './forms/input.jsx';
import Label from './forms/label.jsx';
import InputGroup from './input-group/input-group.jsx';
import LiveInputHOC from './forms/live-input-hoc.jsx';

const LiveInput = LiveInputHOC(Input);
const PositionComponent = props => (
    <InputGroup disabled={props.disabled}>
        <Label text='Breite:' sulkar>
        <LiveInput
            sulkar
            disabled={props.disabled}
            min="1"
            type="number"
            value={props.positionWidth ? props.positionWidth : 0}
            onSubmit={props.onChangePosition}
        />
        </Label>
    </InputGroup>
);

PositionComponent.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onChangePosition: PropTypes.func.isRequired,
    positionWidth: PropTypes.number
};

export default PositionComponent;
