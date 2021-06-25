import React from 'react'

const Card = ({title}) => {
    return (
        <div className="col" id="item-1">
            <div className="card h-100">
            <div className="card-header">{title}</div>
            <button type="button" class="btn btn-light btn-sm remove" data-bs-toggle="modal" data-bs-target="#confirm">remove item</button>
            <div className="card-body text-secondary">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer bg-transparent"><a href="#">link</a></div>      
            </div>
        </div>
    )
}

export default Card;