import React from 'react';
import PropTypes from 'prop-types';

export default function LoginModal(props) {
  const { setLoginOpen } = props;

  const handleCloseOnClick = (e) => {
    // if (
    //   e.target.classList.contains('modal-content') ||
    //   e.target.classList.contains('thumbnails')
    // ) {
    setLoginOpen(false);
    // }
  };

  return (
    <div className="login-modal-backdrop" onClick={handleCloseOnClick}>
      <div className="modal-content"></div>
    </div>
  );
}

LoginModal.propTypes = {
  setLoginOpen: PropTypes.func,
};
