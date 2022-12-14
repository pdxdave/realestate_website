import {
    GET_PROPERTIES_BEGIN,
    GET_PROPERTIES_SUCCESS,
    GET_PROPERTIES_ERROR,
    GET_SINGLE_PROPERTY_BEGIN,
    GET_SINGLE_PROPERTY_SUCCESS,
    GET_SINGLE_PROPERTY_ERROR
} from '../actions'

const property_reducer = (state, action) => {

    
    // GET ALL PROPERTIES
    if(action.type === GET_PROPERTIES_BEGIN){
        return {
            ...state,
            properties_loading: true
        }
    }
    if(action.type === GET_PROPERTIES_SUCCESS){
        const featured_properties = action.payload.filter((property) => property.featured === true)
        const newListing_properties = action.payload.filter((property) => property.newlisting === true)
        return {
            ...state,
            properties_loading: false,
            properties: action.payload,
            featured_properties,
            newListing_properties
        }
    }
    if(action.type === GET_PROPERTIES_ERROR){
        return {
            ...state,
            properties_error: true,
            properties_loading: false
        }
    }

    // GET SINGLE PROPERTY
    if(action.type === GET_SINGLE_PROPERTY_BEGIN){
        return {
            ...state,
            single_property_error: false,
            single_property_loading: true
        }
    }
    if(action.type === GET_SINGLE_PROPERTY_SUCCESS){
        return {
            ...state,
            single_property_loading: false,
            single_property: action.payload
        }
    }
    if(action.type === GET_SINGLE_PROPERTY_ERROR){
        return {
            ...state,
            single_property_loading: false,
            single_property_error: true
        }
    }

    throw new Error(`No Matching "${action.type}" - action type`)
}

export default property_reducer