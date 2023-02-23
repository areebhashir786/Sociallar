import React from "react";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="notFoundContainer">
            <div class="error-page-wrap">
                <article class="error-page gradient">
                    <hgroup>
                        <h1>404</h1>
                        <h2>oops! page not found</h2>
                    </hgroup>
                    <a href="/" title="Back to site" class="error-back">Go to Home</a>
                </article>
            </div>
        </div>
        // <div className="notFound">
        //     <div className="notFoundContainer">
        //         <ErrorOutline />
        //         <Typography className="error-text" variant="h3" style={{ padding: "2vmax" }}>
        //             Page Not Found
        //         </Typography>
        //         <Link to="/">
        //             <Typography variant="h5">Go to Home</Typography>
        //         </Link>
        //     </div>
        // </div>
    );
};

export default NotFound;