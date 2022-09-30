import axios from 'axios'
import React, {useContext, useEffect, useReducer} from 'react'
import { GET_PROPERTIES_BEGIN, GET_PROPERTIES_ERROR, GET_PROPERTIES_SUCCESS } from '../actions'
import reducer from '../reducers/property_reducer'
import {property_url as url} from '../utilities/misc'

const initialState = {
    properties_loading: false,
    properties_error: false,
    properties: [],
    featured_properties: [],
    newListing_properties: []
}

const PropertiesContext = React.createContext()

export const PropertiesProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // GET ALL PROPERTIES
    const fetchProperties = async (url) => {
        dispatch({ type: GET_PROPERTIES_BEGIN})
        try {
            const response = await axios.get(url)
            const properties = response.data 
            // console.log(properties)
            dispatch({ type: GET_PROPERTIES_SUCCESS, payload: properties})
        } catch (error) {
            dispatch({ type: GET_PROPERTIES_ERROR})
        }
    }

    useEffect(() => {
        fetchProperties(url)
    }, [])

    return (
        <PropertiesContext.Provider value={{
            ...state,
            
        }}>
            {children}
        </PropertiesContext.Provider>
    )
}

export const usePropertiesContext = () => {
    return useContext(PropertiesContext)
}