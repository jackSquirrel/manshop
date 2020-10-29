import React from 'react';

function Item(props) {
    return (
        <div className="item">
            <div className="item__img-field">
                <img className="item__img" src={props.img} alt="wristwatch" />
            </div>
            <p className="item__name">{props.name}</p>
            <p className="item__price">{props.price}</p>
        </div>
    )
}

export default Item;