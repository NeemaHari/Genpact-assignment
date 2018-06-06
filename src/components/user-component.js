import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import {
    Persona,
    PersonaSize,
} from 'office-ui-fabric-react/lib/Persona';
import _ from 'lodash';

function UserComponent({getUserDetails, userDetails}) {
    return (
        <div className="user-container">
            <TextField
                label="User id"
                description="Type user id and press enter"
                className="user-input"
                onKeyPress={getUserDetails}
                />
            {!_.isEmpty(userDetails) ?
                <Persona
                    className="persona"
                    imageUrl={userDetails.avatar}
                    text={`${userDetails.first_name} ${userDetails.last_name}`}
                    secondaryText={`ID: ${userDetails.id}`}
                    size={PersonaSize.size72}
                    imageAlt={'Custom Coin Image'}
                    coinSize={72}
                    />
                :
                <Persona
                    className="persona"
                    showUnknownPersonaCoin={true}
                    text='Unknown User'
                    size={PersonaSize.size72}
                    />
            }

        </div>
    );
}

UserComponent.propTypes = {
    userDetails: PropTypes.object,
    getUserDetails: PropTypes.func.isRequired,
}

UserComponent.defaultProps = {
    userDetails: {},
}

export default UserComponent;