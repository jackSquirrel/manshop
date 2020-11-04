import React from 'react';

function Mailing() {
    return (
        <div className="footer__block">
            <h3 className="footer__title">Рассылка</h3>
            <p className="footer__text">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Mi semper viverra nunc cursus 
                tortor lectus nunc nulla nibh.
            </p>
            <form className="footer__form">
                <input type="email" className="footer__email" placeholder="Ваша почта"></input>
                <button className="footer__button" type="submit">подписаться</button>
            </form>
        </div>
    )
}

export default Mailing;