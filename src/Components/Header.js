import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="header__content">
                <p className="header__logo">porten</p>
                <nav className="menu">
                    <ul className="menu__list">
                        <li className="menu__item menu__item_active"><a href="link">Понравилось</a></li>
                        <li className="menu__item"><a href="link">Личный кабинет</a></li>
                        <li className="menu__item"><a href="link">Настройки</a></li>
                    </ul>
                    <a href="link"><img className="menu__icon" src="images/shopper.svg" alt="shopper"/></a>
                    <a href="link"><img className="menu__icon" src="images/search.svg" alt="search"/></a>
                </nav>
            </div>
        </header>
    )
}

export default Header;