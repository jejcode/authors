import React from "react";
import { Link } from "react-router-dom";

const AuthorNotFound = () => {
    return (
        <>
            <h1>Author Not Find</h1>
            <p>Would you like to add this author?</p>
            <Link to={'/authors/new'}>Yes</Link>
            <span className="mx-2">|</span>
            <Link to={'/authors'}>No</Link>
        </>
    )
}

export default AuthorNotFound