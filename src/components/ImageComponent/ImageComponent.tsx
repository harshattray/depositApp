import React from 'react';
import './ImageComponent.scss';
import logo from '../Images/faceit.svg'

const CompanyImage: React.FC = () => {
    return (
        <div className="image-container" data-testid="imageContainer">
            <img alt="company logo" src={logo} />
        </div>
    );
};

export default CompanyImage;
