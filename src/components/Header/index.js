import React from 'react';
import './index.css'; 

export default ({black}) => {
    return (
        <header className={black ? "black" : ''} >
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <img src="https://www.flaticon.com/svg/static/icons/svg/518/518713.svg" alt="User"/>
            </div>
</header>
    )
}