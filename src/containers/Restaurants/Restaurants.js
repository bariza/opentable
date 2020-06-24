import React from 'react';
import { Redirect } from 'react-router-dom';

import classes from './Restaurants.module.scss';
import { useSelector } from 'react-redux';
import Restaurant from '../../components/Restaurant/Restaurant';

const Restaurants = () => {
    const restaurantsResults = useSelector((state) => state.cities);
    const { filteredRestaurants } = restaurantsResults;

    let displayRestaurants;
    if (!restaurantsResults.isCityLoaded) {
        displayRestaurants = <Redirect to="/"/>;
    } else {
        displayRestaurants = (
            <div className={ classes.RestaurantsContainer }>
                { filteredRestaurants.length === 0 ?
                    <div className={ classes.Empty }>No restaurants in the city you searched.</div> :
                    filteredRestaurants.map((restaurant) => {
                        return <Restaurant key={ restaurant.id } name={ restaurant.name } address={ restaurant.address }
                                           price={ restaurant.price } image={ restaurant.image_url }/>;
                    }) }
            </div>);
    }

    return (
        <React.Fragment>
            { displayRestaurants }
        </React.Fragment>
    );
};

export default Restaurants;