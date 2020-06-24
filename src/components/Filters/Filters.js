import React, { useState } from 'react';
import classes from './Filters.module.scss';
import { useDispatch } from 'react-redux';
import { filterRestaurants } from '../../store/actions';

const Filters = ({ show }) => {
    const inputPlaceholder = 'Refine by name, area, or address';
    const [filteredValue, setFilteredValue] = useState('');
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        const filter = e.target.value;
        setFilteredValue(filter);
        dispatch(filterRestaurants(filter));
    };

    return (
        <React.Fragment>
            { show &&
            <input className={ classes.Input } type="text" placeholder={ inputPlaceholder } value={ filteredValue }
                   onChange={ onChangeHandler }/> }
        </React.Fragment>
    );
};

export default Filters;