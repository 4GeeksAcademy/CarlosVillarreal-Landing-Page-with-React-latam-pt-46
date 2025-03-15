import React from "react";

const Hero = () => {
    return (
        <div className="jumbotron">
            <h1 className="text-center">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p>It uses utility clases for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </div>
    );
};

export default Hero