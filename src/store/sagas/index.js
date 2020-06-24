import { takeLatest } from 'redux-saga/effects';

import { FETCH_RESTAURANTS } from '../actions/city';
import { fetchRestaurantsSaga } from './city';

export function* watchCity() {
    yield takeLatest(FETCH_RESTAURANTS, fetchRestaurantsSaga);
}
