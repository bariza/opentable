import { put } from 'redux-saga/effects';

import axios from '../../axios/axios-opentable';
import * as actions from '../actions';

export function* fetchRestaurantsSaga(action) {
    yield put(actions.fetchRestaurantsStart());
    const queryParams = `?city=${ action.payload }`;
    try {
        const response = yield axios.get('/restaurants' + queryParams);
        yield put(actions.fetchRestaurantsSuccess(response.data));
    } catch (error) {
        yield put(actions.fetchRestaurantsFail(error));
    }
}
