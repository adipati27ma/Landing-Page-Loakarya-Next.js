import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '@material-ui/icons/Close';

import TextInputModal from '../TextInputModal/TextInputModal';
import Button from '../Button/Button';

export default function LoginModal(props) {
  const { setLoginOpen, setRegistOpen } = props;

  const handleCloseOnClick = (e) => {
    if (
      e.target.classList.contains('login-modal-backdrop') ||
      e.target.classList.contains('link-register')
    ) {
      setLoginOpen(false);
    }
  };

  return (
    <div className="login-modal-backdrop" onClick={handleCloseOnClick}>
      <div className="modal-content">
        <CloseIcon className="close-icon" onClick={() => setLoginOpen(false)} />
        {/* <img
          src="/images/icon/close-icon.svg"
          alt="close"
          title="Close"
          className="close-icon"
          onClick={() => setLoginOpen(false)}
        /> */}
        <h4>Masuk</h4>
        <form>
          <TextInputModal type="email" label="Email" name="email" required />
          <TextInputModal
            type="password"
            label="Kata Sandi"
            name="password"
            required
          />
          <Button text="Masuk" classNames="btn-can-hover-blue block-button" />
          <span className="or-word">atau</span>
          <img
            src="/images/icon/button-signin-google.svg"
            alt="Sign in with Google"
            title="Sign in with Google"
            className="signin-with-google-button"
          />
          <p>
            Belum punya akun?&nbsp;{' '}
            <a
              className="link-register"
              onClick={() => {
                setTimeout(() => {
                  setRegistOpen(true);
                }, 200);
              }}
            >
              Daftar
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

LoginModal.propTypes = {
  setLoginOpen: PropTypes.func,
  setRegistOpen: PropTypes.func,
};
