import React from 'react';
import Item from './Item';

function NewGoods() {
    return (
        <section className="new-goods">
            <h2 className="section__title new-goods__title">новые поступления</h2>
            <hr />
            <div className="new-goods__container">
                <Item img="images/watches.png" name="Louis XVI ATHOS" price="165 000 руб."/>
                <Item img="images/watches.png" name="Louis XVI ATHOS" price="165 000 руб."/>
                <Item img="images/watches.png" name="Louis XVI ATHOS" price="165 000 руб."/>
                <Item img="images/watches.png" name="Louis XVI ATHOS" price="165 000 руб."/>
                <Item img="images/watches.png" name="Louis XVI ATHOS" price="165 000 руб."/>
                <Item img="images/watches.png" name="Louis XVI ATHOS" price="165 000 руб."/>
                <Item img="images/watches.png" name="Louis XVI ATHOS" price="165 000 руб."/>
                <Item img="images/watches.png" name="Louis XVI ATHOS" price="165 000 руб."/>
            </div>
        </section>
    )
}

export default NewGoods;