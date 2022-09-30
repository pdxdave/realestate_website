import axios from 'axios'
import React, {useContext, useEffect, useReducer} from 'react'
import { 
    GET_PROPERTIES_BEGIN, 
    GET_PROPERTIES_ERROR, 
    GET_PROPERTIES_SUCCESS,
    GET_SINGLE_PROPERTY_BEGIN,
    GET_SINGLE_PROPERTY_SUCCESS,
    GET_SINGLE_PROPERTY_ERROR
} from '../actions'
import reducer from '../reducers/property_reducer'
import {property_url as url} from '../utilities/misc'

const initialState = {
    properties_loading: false,
    properties_error: false,
    properties: [],
    featured_properties: [],
    newListing_properties: [],

    single_property_loading: false,
    single_property_error: false,
    single_property: []
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
            console.log(properties)
            // console.log(properties)
            dispatch({ type: GET_PROPERTIES_SUCCESS, payload: properties})
        } catch (error) {
            dispatch({ type: GET_PROPERTIES_ERROR})
        }
    }

    useEffect(() => {
        fetchProperties(url)
    }, [])

    // GET SINGLE PROPERTY
    const fetchSingleProperty = async (url) => {
        dispatch({ type: GET_SINGLE_PROPERTY_BEGIN})
        try {
            const response = await axios.get(url)
            const singleProperty = response.data
            dispatch({ type: GET_SINGLE_PROPERTY_SUCCESS, payload: singleProperty})
        } catch (error) {
            dispatch({ type: GET_SINGLE_PROPERTY_ERROR})
        }
    }

    return (
        <PropertiesContext.Provider value={{
            ...state,
            fetchSingleProperty
            
        }}>
            {children}
        </PropertiesContext.Provider>
    )
}

export const usePropertiesContext = () => {
    return useContext(PropertiesContext)
}