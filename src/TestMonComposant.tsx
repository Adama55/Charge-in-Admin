import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TestMonComposant: React.FC = () => {
    return (
        <div>
            <p>Cliquez sur <FontAwesomeIcon icon={faArrowRight} /> pour continuer.</p>
        </div>
    );
}

export default TestMonComposant;
