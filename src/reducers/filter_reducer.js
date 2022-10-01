import {
    LOAD_PROPERTIES,
    UPDATE_SORT,
    SORT_PROPERTIES,
    UPDATE_FILTERS,
    FILTER_PROPERTIES,
    CLEAR_FILTERS
} from '../actions'


const filter_reducer = (state, action) => {
    if(action.type === LOAD_PROPERTIES){
        return {
            ...state,
            all_properties: [...action.payload],
            filtered_properties: [...action.payload]
        }
    }

    throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer