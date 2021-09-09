import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({
  name,
  value,
  placeholder,
  type,
  onChange,
  ...rest
}) => {
  return (
    <div>
      <input
        className="p-2 w-full"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextInputGroup.defaultProps = {
  type: 'text',
};

export default TextInputGroup;
