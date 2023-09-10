import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            Error 404. <Link to="/">Back to Home page.</Link>
        </div>
    );
}

export default NotFound;