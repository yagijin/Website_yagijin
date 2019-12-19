import React from 'react';
import './SNSIcons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

export default function SNSIcons () { 
    return (
        <div className="icon-div">
            <a href="https://github.com/yagijin">
                <FontAwesomeIcon icon={faGithubSquare} color="#211F1F" size="3x" className="icon"/>
            </a>
            <FontAwesomeIcon icon={faTwitterSquare} color="#1DA1F2" size="3x" className="icon"/>
            <FontAwesomeIcon icon={faInstagram} color="#222222" size="3x" className="icon"/>
            <FontAwesomeIcon icon={faFacebookSquare} color="#3B5998" size="3x" className="icon"/>
        </div>
    );
}