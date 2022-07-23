import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Ooops...404</h2>
            <p>Ah yes, a classic...couldn't find that page</p>
            <Link to="/">Return to the Homepage</Link>
        </div>
    );
};

export default NotFound;