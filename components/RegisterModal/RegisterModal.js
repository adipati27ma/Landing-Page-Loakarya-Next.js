import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '@material-ui/icons/Close';

import TextInputModal from '../TextInputModal/TextInputModal';
import Button from '../Button/Button';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0.2,
    },
  },
};

export default function RegisterModal(props) {
  const { setRegistOpen, setLoginOpen } = props;

  const handleCloseOnClick = (e) => {
    if (
      e.target.classList.contains('register-modal-backdrop') ||
      e.target.classList.contains('link-login')
    ) {
      setRegistOpen(false);
    }
  };

  return (
    <motion.div
      className="register-modal-backdrop"
      onClick={handleCloseOnClick}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="modal-content"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <CloseIcon
          className="close-icon"
          onClick={() => setRegistOpen(false)}
        />
        {/* <img
          src="/images/icon/close-icon.svg"
          alt="close"
          title="Close"
          className="close-icon"
          onClick={() => setRegistOpen(false)}
        /> */}
        <div className="register-form-header">
          <h4>Registrasi</h4>
          <p className="subtitle">
            Bergabung bersama kami dan dapatkan potongan harga serta garansi
            pada produk dan layanan.
          </p>
        </div>
        <form>
          <TextInputModal
            type="text"
            label="Nama Depan"
            name="firstname"
            required
          />
          <TextInputModal
            type="email"
            label="Alamat Email"
            name="email"
            required
          />
          <TextInputModal
            type="password"
            label="Kata Sandi"
            name="password"
            required
          />
          <TextInputModal
            type="password"
            label="Konfirmasi Kata Sandi"
            name="password2"
            required
          />
          <TextInputModal
            type="text"
            label="Tanggal Lahir"
            name="dateOfBirth"
            required
          />
          <TextInputModal
            type="text"
            label="Daerah Asal"
            name="placeOfOrigin"
            required
          />
          <Button
            type="submit"
            text="Daftar"
            classNames="btn-can-hover-green block-button"
          />
          <p>
            Sudah punya akun?&nbsp;{' '}
            <a
              className="link-login"
              onClick={() => {
                setTimeout(() => {
                  setLoginOpen(true);
                }, 500);
              }}
            >
              Masuk
            </a>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}

RegisterModal.propTypes = {
  setRegistOpen: PropTypes.func,
  setLoginOpen: PropTypes.func,
};
