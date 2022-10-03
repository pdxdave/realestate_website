import {
    LOAD_PROPERTIES,
    UPDATE_SORT,
    SORT_PROPERTIES,
    UPDATE_FILTERS,
    FILTER_PROPERTIES,
    CLEAR_FILTERS
} from '../actions'


const filter_reducer = (state, action) => {

    

    // INITIAL PROPERTY LOADING
    if(action.type === LOAD_PROPERTIES){
        // get prices when properties load
        let maxPrice = action.payload.map((prop) => prop.price)
        // get maxprice
        maxPrice = Math.max(...maxPrice)

        return {
            ...state,
            all_properties: [...action.payload],
            filtered_properties: [...action.payload],
            filters:{...state.filters, max_price: maxPrice, price: maxPrice}
        }
    }

    // UPDATE SORT - do this before sort by prices. have to know what to sort
    // before sorting
    if(action.type === UPDATE_SORT){
        return {
            ...state,
            sort: action.payload
        }
    }

    //SORT BY PRICE
    if(action.type === SORT_PROPERTIES){
        const {sort, filtered_properties} = state
        // if nothing is sorted, it will return existing properties instead of an empty array
        let tempProperties = [...filtered_properties]
        if(sort === 'price-lowest'){
            tempProperties = tempProperties.sort((a, b) => a.price - b.price)
        }
        if(sort === 'price-highest'){
            tempProperties = tempProperties.sort((a, b) => b.price - a.price)
        }
        return {...state, filtered_properties: tempProperties}
    }

    // UPDATE FILTERS
    if(action.type === UPDATE_FILTERS){
        const {name, value} = action.payload 

        return {...state, filters: {...state.filters, [name]:value}}
    }

    // FILTER PRODUCTS - the last one to work on
    if(action.type === FILTER_PROPERTIES){
        const {all_properties} = state
        const {price, lastname, city} = state.filters
        // fresh copy of the state
        let tempProperties = [...all_properties]


        // lastname (e.g, agent)
        if(lastname !== 'all'){
            tempProperties = 
            tempProperties.filter((banana) => banana.lastname === lastname)
        }

        // city
        if(city !== 'all'){
            tempProperties =
            tempProperties.filter((banana) => banana.city === city)
        }

        // price
        tempProperties = tempProperties.filter((banana) => banana.price <= price)

        return {
            ...state,
            filtered_properties: tempProperties
        }
    }

    // CLEAR FILTERS
    if(action.type === CLEAR_FILTERS){
        return {
            ...state,
            filters: {
                ...state.filters,
                price: state.filters.max_price,
                lastname: 'all',
                city: 'all',
                dwelling: 'all'
            }
        }
    }



    throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer