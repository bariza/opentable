import React from "react";

import classes from "./Restaurant.module.scss"

const Restaurant = (props) => {
    const price = '$'.repeat(+props.price);
    return (
        <div className={ classes.RestaurantContainer }>
            <img className={ classes.Image } src={ props.image } alt={ props.name }/>
            <div className={ classes.Name }>{ props.name }</div>
            <div className={ classes.Address }>{ props.address }</div>
            <div className={ classes.Price }>{price}</div>
        </div>
    );
}

export default Restaurant;