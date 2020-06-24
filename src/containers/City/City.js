import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './City.module.scss';
import { fetchRestaurants } from '../../store/actions';
import { fetchRestaurantsInit } from '../../store/actions/city';
import Spinner from '../../components/Spinner/Spinner';

const City = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const isCityLoaded = useSelector((state) => state.cities.isCityLoaded);
    const isLoading = useSelector((state) => state.cities.isLoading);
    const inputRef = useRef();

    useEffect(() => {
        dispatch(fetchRestaurantsInit());
        inputRef.current.focus();
    }, [dispatch]);

    const cityInputHandler = (event) => {
        setCity(event.target.value);
    };

    const submitHandler = (e) => {
        if (e.keyCode === 13) {
            dispatch(fetchRestaurants(city));
        }
    };

    let cityRedirect = null;
    if (isCityLoaded) {
        cityRedirect = <Redirect to="/restaurants"/>;
    }

    let inputDisplay = (
        <React.Fragment>
            <div className={ classes.Title }>Enter city name</div>
            <input ref={ inputRef } className={ classes.Input } value={ city } onChange={ cityInputHandler }
                   onKeyDown={ submitHandler }/>
        </React.Fragment>

    );

    if (isLoading) {
        inputDisplay = <Spinner/>;
    }

    return (
        <React.Fragment>
            <div className={ classes.InputContainer }>
                { cityRedirect }
                { inputDisplay }
            </div>
        </React.Fragment>
    );
};

export default City;