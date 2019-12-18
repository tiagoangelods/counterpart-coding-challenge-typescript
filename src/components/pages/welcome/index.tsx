import React from 'react';
import { Link } from "react-router-dom";
import {DataPreview} from './data-preview';
 
const Welcome: React.FC = () => {
    return (
        <>
            <div className="common-container">
                <h1>Survey</h1>
                <p>Help us to find the best music streaming service</p>
                <Link className="common-button" to="/ask/personal-info">let's start</Link>
            </div>
            <DataPreview />
        </>
    )
}

export default Welcome;