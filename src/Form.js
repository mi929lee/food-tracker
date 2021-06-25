import React from 'react'

const FormItem = ({tag}) => {
    // const attributes_left = ["name of item", "expiration date", "quantity", "type"]
    // const attributes_right = ["where to buy", "who buys"]
    // const left_form = attributes_left.map((attribute) =>
    //     <FormItem tag={attribute}/>
    // );
    // const right_form = attributes_right.map((attribute) =>
    //     <FormItem tag={attribute}/>
    // );
    return (
        <div className="control">
            <label className="label">{tag}</label>
            <div className="has-icons-left">
                <input className="input" type="text" placeholder={tag}/>
                <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                </span>
            </div>
        </div> 
    )
}

export default FormItem;