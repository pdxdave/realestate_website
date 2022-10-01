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
        agent: 'all',
        city: 'all',
        dwelling: 'all'
    }
}

const FilterContext = React.createContext()

export const FilterProvider = ({children}) => {
    const {properties} = usePropertiesContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    // console.log('context', state)

    useEffect(() => {
        dispatch({ type: LOAD_PROPERTIES, payload: properties})
    }, [properties])

    return (
        <FilterContext.Provider value={{
            ...state,
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}