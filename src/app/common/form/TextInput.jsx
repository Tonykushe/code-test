import React from 'react'
import PropTypes from 'prop-types';
import classnames from "classnames";

const TextInput = ({name,placeholder,value,label,error,info,type,onChange,disabled}) => {
    return (
        <div className="form-group">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                value={value}
                onChange={onChange}
                // disabled={disabled}
            />
            {info && <small className="form-text text-muted">{info}</small>}

        </div>
    )
}

// TextInput.propTypes = {
//     name: PropTypes.string.isRequired,
//     placeholder: PropTypes.string,
//     value: PropTypes.string.isRequired,
//     info: PropTypes.string,
//     type: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     disabled: PropTypes.string,
// }

TextInput.defaultProps = {
    type: 'text'
}

export default TextInput
