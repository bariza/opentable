import {
    FETCH_RESTAURANTS_START,
    FETCH_RESTAURANTS_SUCCESS,
    FETCH_RESTAURANTS_FAIL,
    FETCH_RESTAURANTS_INIT, FILTER_RESTAURANTS
} from '../actions/city';
import { stringContains, updateObject } from '../../utils/utilsHelpers';


const initialState = {
    totalEntries: null,
    currentPage: null,
    perPage: null,
    restaurants: [],
    filteredRestaurants: [],
    isLoading: false,
    isCityLoaded: false
};

const fetchRestaurantsInit = (state, action) => {
    return updateObject(state, initialState);
};

const fetchRestaurantsStart = (state, action) => {
    return updateObject(state, { isLoading: true });
};

const fetchRestaurantsSuccess = (state, action) => {
    return updateObject(state, {
        totalEntries: action.payload.total_entries,
        currentPage: action.payload.current_page,
        perPage: action.payload.per_page,
        restaurants: action.payload.restaurants,
        filteredRestaurants: action.payload.restaurants,
        isLoading: false,
        isCityLoaded: true,
        filter: ''
    });
};

const fetchRestaurantsFail = (state, action) => {
    return updateObject(state, { isLoading: false });
};

const filterRestaurants = (state, action) => {
    const filter = action.payload;
    let filteredRestaurants = [...state.restaurants];
    filteredRestaurants = filteredRestaurants.filter((restaurant) => {
        const { name, area, address } = restaurant;
        return stringContains(name, filter) || stringContains(area, filter) || stringContains(address, filter);
    });
    return updateObject(state, {
        filteredRestaurants
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESTAURANTS_INIT:
            return fetchRestaurantsInit(state, action);
        case FETCH_RESTAURANTS_START:
            return fetchRestaurantsStart(state, action);
        case FETCH_RESTAURANTS_SUCCESS:
            return fetchRestaurantsSuccess(state, action);
        case FETCH_RESTAURANTS_FAIL:
            return fetchRestaurantsFail(state, action);
        case FILTER_RESTAURANTS:
            return filterRestaurants(state, action);
        default:
            return state;
    }
};

export default reducer;