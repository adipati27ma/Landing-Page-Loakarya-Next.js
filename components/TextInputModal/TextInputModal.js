import React from 'react';
import PropTypes from 'prop-types';

export default function TextInputModal(props) {
  const { label, name, required } = props;

  return (
    <div className="text-input-modal-container">
      <label for="name" className="text-input-label">
        {label}
      </label>
      <input
        required={required}
        type="text"
        name={name}
        id={name}
        className="text-input"
      />
    </div>
  );
}

TextInputModal.propTypes = {
  label: PropTypes.text,
  name: PropTypes.text,
  required: PropTypes.bool,
};
