import reducer from './city';
import {
    FETCH_RESTAURANTS_START,
    FETCH_RESTAURANTS_SUCCESS,
    FETCH_RESTAURANTS_FAIL,
    FETCH_RESTAURANTS_INIT, FILTER_RESTAURANTS
} from '../actions/city';

const initialState = {
    totalEntries: null,
    currentPage: null,
    perPage: null,
    restaurants: [],
    filteredRestaurants: [],
    isLoading: false,
    isCityLoaded: false
};

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should set loading true on fetch restaurants start', () => {
        expect(reducer(initialState, {
            type: FETCH_RESTAURANTS_START
        })).toEqual({
            totalEntries: null,
            currentPage: null,
            perPage: null,
            restaurants: [],
            filteredRestaurants: [],
            isLoading: true,
            isCityLoaded: false
        });
    })
});
