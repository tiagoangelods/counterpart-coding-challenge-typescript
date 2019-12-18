import React from 'react';
import './style.css';

interface Props {
    label: string;
    required?: boolean;
    onError?: boolean;
    inputProps?: any;
    errorMessage?: string;
}

export const InputSection: React.FC<Props> = (props: Props) => {
    return (
        <div className="form-section">
            <label>{props.label}{props.required && ' *'}</label>
            <input className={props.onError === true ? 'has-error':''} {...props.inputProps} />
            {props.onError && (<div className="error-section">{props.errorMessage}</div>)}
        </div>
    );
}