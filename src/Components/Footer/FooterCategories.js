import React from 'react';

function FooterCategories() {
    return (
        <div className="footer__block">
            <h3 className="footer__title">категории</h3>
            <div className="categories__container">
                <a href="categ" className="footer__category">часы</a>
                <a href="categ" className="footer__category">браслеты</a>
                <a href="categ" className="footer__category">ремни</a>
                <a href="categ" className="footer__category">ювелирные изделия</a>
                <a href="categ" className="footer__category">запонки</a>
            </div>
        </div>
    )
}

export default FooterCategories;