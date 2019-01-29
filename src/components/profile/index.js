import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
    return (
        <div>
            <h2>Профиль</h2>
            <p>Вас зовут: {props.name}</p>
        </div>
    );
};

Profile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired
};

export default Profile;
