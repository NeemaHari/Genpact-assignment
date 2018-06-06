import React from 'react';
import PropTypes from 'prop-types';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

function ButtonComponent(props) {
    return (
        <div className="button-container">
            <DefaultButton
                primary={true}
                text='Enter values to table'
                onClick={props.writeToTable}
                />
            <DefaultButton
                primary={false}
                text='Reset Table'
                onClick={props.resetTable}
                />
            <DefaultButton
                primary={false}
                text='Reset Drop downs'
                onClick={props.resetDropDowns}
                />
        </div>
    );
}

ButtonComponent.propTypes = {
    writeToTable: PropTypes.func.isRequired,
    resetTable: PropTypes.func.isRequired,
    resetDropDowns: PropTypes.func.isRequired,
};

export default ButtonComponent;