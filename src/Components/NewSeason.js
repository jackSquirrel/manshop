import React from 'react';
import Item from './Item';

function NewSeason() {
    return (
        <section className="new-season">
            <h2 className="section__title new-season__title">сезон 2020/21</h2>
            <hr />
            <div className="new-season__items">
                <Item img="images/watches.png" name="Louis XVI ATHOS" price="165 000 руб." />
                <Item img="images/watches.png" name="Louis XVI ATHOS" price="165 000 руб." />
                <Item img="images/watches.png" name="Louis XVI ATHOS" price="165 000 руб." />
            </div>
        </section>
    )
}

export default NewSeason;