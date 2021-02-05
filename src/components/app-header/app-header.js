import React from 'react';

import './app-header.css';


const AppHeader = ({allPosts, liked}) => {
    
    return (
        <div className="app-header d-flex">
            <h1>Mykola Kutsil</h1>

            <h2>{`${allPosts} записів, з них сподобалось - ${liked}`}</h2>

        </div>
    )
}

export default AppHeader;


