import React from 'react';

function TopLine() {
    return (
        <div className="topLine">
            <div className="topLine__info">
                <img className="topLine__phone-img" src="images/phone.svg" alt="Phone"></img>
                <p className="topLine__text"><a className="topLine__link" href="tel:8-812-123-45-67">8 (812) 123-45-67</a>    |    Работаем 7 дней в неделю    |    9:00 — 18:00  </p>
            </div>
            <div className="topLine__account">
                <img className="topLine__enter-img" src="images/enter.svg" alt="Enter" />
                <p className="topLine__text"><a className="topLine__link" href="link-for-sign-in">Войти</a> / <a className="topLine__link" href="link-for-sign-up">Регистрация</a></p>
            </div>
        </div>
    )
}

export default TopLine;