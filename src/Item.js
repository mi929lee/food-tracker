import React from 'react'

const Item = (props) => {
    // const item = x.item
    // const item.name = "frosted flakes";
    // const item.expiration = "2021-06-31";
    // const item.qty = "1";
    // const item.type = "snacks";
    
    // const item_name = props.name;
    // const expiration = props.expiration;
    // const qty = props.qty;
    // const type = props.type;

    const {name, expiration, qty, type} = props

    return (
        <tr>
            <td>{name}</td>
            <td>{expiration}</td>
            <td>{qty}</td>
            <td>{type}</td>
        </tr>
        
        // <tr>
        //     <td>frosted flakes</td>
        //     <td>2021-06-31</td>
        //     <td>1</td>
        //     <td>snacks</td>
        // </tr>
        
    )
}

export default Item;