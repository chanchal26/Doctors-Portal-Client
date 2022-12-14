import React from 'react';
import img from '../../assets/images/chair.png';
import img2 from '../../assets/images/bg.png'


const Banner = () => {
    return (
        <div style={{ background: `url(${img2})` }} className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;