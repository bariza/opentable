export const FETCH_RESTAURANTS_INIT = 'FETCH_RESTAURANTS_INIT';
export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';
export const FETCH_RESTAURANTS_START = 'FETCH_RESTAURANTS_START';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_RESTAURANTS_FAIL = 'FETCH_RESTAURANTS_FAIL';
export const FILTER_RESTAURANTS = 'FILTER_RESTAURANTS';

export const fetchRestaurantsInit = () => {
    return {
        type: FETCH_RESTAURANTS_INIT
    };
};

export const fetchRestaurants = (city) => {
    return {
        type: FETCH_RESTAURANTS,
        payload: city
    };
};

export const fetchRestaurantsStart = () => {
    return {
        type: FETCH_RESTAURANTS_START
    };
};

export const fetchRestaurantsSuccess = response => {
    return {
        type: FETCH_RESTAURANTS_SUCCESS,
        payload: response
    };
};

export const fetchRestaurantsFail = error => {
    return {
        type: FETCH_RESTAURANTS_FAIL,
        error: error
    };
};

export const filterRestaurants = (filter) => {
    return {
        type: FILTER_RESTAURANTS,
        payload: filter
    };
};

