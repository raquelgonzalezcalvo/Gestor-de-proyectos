import React from 'react';
import PropTypes from 'prop-types';
// import defaultAvatar from '../images/defaultAvatar.png';
// import '../stylesheets/Profile.css';

function Profile(props) {
  // const avatar = props.avatar === '' ? defaultAvatar : props.avatar;
  return (
    <div
      className={props.className}
      style={{ backgroundImage: `url(${props.avatar})` }}
    ></div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;