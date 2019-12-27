import React from 'react';
import './SNSIcons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

export default function SNSIcons () { 
    return (
        <div className="icon-div">
            <a href="https://github.com/yagijin" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithubSquare} color="#211F1F" size="3x" className="icon"/>
            </a>
            <a href="https://twitter.com/yagijinjin" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitterSquare} color="#1DA1F2" size="3x" className="icon"/>
            </a>
            <a href="https://www.instagram.com/yagijimjim/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} color="#222222" size="3x" className="icon"/>
            </a>
            <a href="https://www.facebook.com/yagijim" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookSquare} color="#3B5998" size="3x" className="icon"/>
            </a>
        </div>
    );
}