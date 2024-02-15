import { FC, useState } from 'react';

const RadioButtonBox = (props: any) => {
    return (
        <div onClick={props.handleClick} className={`radio_btn-container ${props.active ? 'radio_btn-container_active' : ''}`}>
            <div className={`radio_btn ${props.active ? 'radio_btn_active' : ''}`}>{props.label}</div>
        </div>
    );
};

export default RadioButtonBox;
