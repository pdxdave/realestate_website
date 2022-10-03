import React, {useEffect, useContext, useReducer} from 'react'
import reducer from '../reducers/filter_reducer'

import {
   LOAD_PROPERTIES,
   UPDATE_SORT,
   SORT_PROPERTIES,
   UPDATE_FILTERS,
   FILTER_PROPERTIES,
   CLEAR_FILTERS
} from '../actions'

import {usePropertiesContext} from './property_context'

const initialState = {
    filtered_properties: [],
    all_properties: [],
    sort: 'price-lowest',
    filters: {
        min_price: 0,
        max_price: 0,
        price: 0,
        lastname: 'all',
        city: 'all',
        dwelling: 'all'
    }
}

const FilterContext = React.createContext()

export const FilterProvider = ({children}) => {
    const {properties} = usePropertiesContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    // INITIAL PROPERTY LOADING
    useEffect(() => {
        dispatch({ type: LOAD_PROPERTIES, payload: properties})
    }, [properties])

    // need for sorting. when products or state changes, we'll run
    // this dispatch
    useEffect(() => {
        dispatch({ type: FILTER_PROPERTIES}) // second
        dispatch({ type: SORT_PROPERTIES}) // first
    }, [properties, state.sort, state.filters])


    // SORTING BY PRICE
    const updateSort = (e) => {
        const value = e.target.value
        dispatch({type: UPDATE_SORT, payload: value})
    }

    // FILTERS
    const updateFilters = (e) => {
        let name = e.target.name 
        let value = e.target.value 
        // this solves the problem of changing the filter agent text color
        if(name === 'lastname'){
            value = e.target.textContent
        }
        if(name === 'price'){
            value = Number(value)
        }

    // CLEAR

        dispatch({ type: UPDATE_FILTERS, payload: {name, value}})
    }
    const clearFilters = () => {
        dispatch({type: CLEAR_FILTERS})
    }


    return (
        <FilterContext.Provider value={{
            ...state,
            updateSort,
            updateFilters,
            clearFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}