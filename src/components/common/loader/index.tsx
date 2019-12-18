import React from 'react';
import ReactLogo from '../../../assets/react-logo.svg';
import './style.css';

export const Loader: React.FC = () => {
    return (
        <div id='main-loader'>
            <img src={ReactLogo} id="app-logo" alt="logo" />
        </div>
    );
}