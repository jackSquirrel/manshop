import React from 'react';
import FooterAbout from './FooterAbout';
import FooterCategories from './FooterCategories';
import Mailing from './Mailing';

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__container">
                <FooterAbout />
                <FooterCategories />
                <Mailing />
            </div>
        </footer>
    )
}

export default Footer;