import React from 'react'
import Sort from './Sort'
import styled from 'styled-components'
import {useFilterContext} from '../context/filter_context'
import {formatPrice, getUniqueValues} from '../utilities/helper'

const Filters = () => {
  const {
     filters: { 
      min_price,
      max_price,
      price,
      lastname,
      city
    },
      updateFilters,
      clearFilters,
      all_properties
  } = useFilterContext()


  const lastnames = getUniqueValues(all_properties, 'lastname')
  const cities = getUniqueValues(all_properties, 'city')

  return (
    <Wrapper>
      <div className='test'>
      <Sort />
      
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>

          {/* agents */}
            <div className='form-settings'>
              <h5>Agents</h5>
              <div className="agents">
                {lastnames.map((ln, index) => {
                  return <button 
                            key={index} 
                            onClick={updateFilters}
                            name="lastname"
                            type="button"
                            className={`${lastname === ln.toLowerCase() ? 'active' : null}`}
                      >{ln}</button>
                })}
              </div>
            </div>
           {/* end of agents */}

            {/* cities */}
            <div className='form-settings'>
              <h5>Cities</h5>
                <select 
                    name="city" 
                    id="city" 
                    value={city} 
                    onChange={updateFilters}
                    className=""
                  >
                    {cities.map((c, index) => {
                      return <option key={index}>{c}</option>
                    })}
                </select>
            </div>
            {/* cities */}

            {/* price range */}
            <div className="form-settings">
              <h5>Price</h5>
              <p>{formatPrice(price)}</p>
              <input type="range" 
                      name="price" 
                      onChange={updateFilters} 
                      min={min_price} 
                      max={max_price}
                      value={price}
                />
            </div>

           {/* end price range */}
        </form>
        <button className='btn-clear' onClick={clearFilters}>Clear Filters</button>
      </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`


  .form-settings {
    margin-bottom: 1.3em;
  }

  .agents {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: .5em;
  }

  button {
    text-align: left;
    border: none;
    font-size: 1rem;
    color: var( --clr-grey-600);
    background: transparent;
    text-transform: capitalize;
    cursor: pointer;
    
  }
  .active {
    color: var( --clr-grey-900);
    text-decoration: underline;
  }

  .btn-clear {
    background: #5D668D;
    color: #fff;
    font-family: inherit;
    padding: .5em 1em;
    font-size: 1rem;
  }

  @media (min-width: 768px){
    .test{
      position: sticky;
      top: 5em;
  }
  }
`

export default Filters