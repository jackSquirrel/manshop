import React from 'react';

function Brands() {
    return (
        <section className="brands">
            <h2 className="section__title brands__title">Наши бренды</h2>
            <hr />
            <div className="brands__logos">
                <img className="brands__logo" src="images/brand-logo.png" alt="fine jwl" />
                <img className="brands__logo" src="images/brand-logo.png" alt="fine jwl" />
                <img className="brands__logo" src="images/brand-logo.png" alt="fine jwl" />
                <img className="brands__logo" src="images/brand-logo.png" alt="fine jwl" />
            </div>
        </section>
    )
}

export default Brands;