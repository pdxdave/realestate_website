import React, {useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { usePropertiesContext } from '../context/property_context';
import { single_property_url as url} from '../utilities/misc';
import {ProcessImages} from '../components';
import { formatPrice } from '../utilities/helper'
import {
  Loading,
  Error,
} from '../components'
import styled from 'styled-components';


const SinglePropertyPage = () => {

  const {id} = useParams()
  
  const {
    single_property_loading: loading,
    single_property_error: error,
    single_property: property,
    fetchSingleProperty
  } = usePropertiesContext()

  useEffect(() => {
    fetchSingleProperty(`${url}${id}`)
  }, [id])

  if(loading){
    return <Loading msg="Your Property Is Loading" />
  }
  if(error){
    return <Error msg="There was an error loading the page"/>
  }

  const {
    dwelling, 
    images, 
    sqft, 
    bed, 
    bath, 
    price,
    address,
    city, 
    state, 
    description, 
    firstname, 
    lastname, 
    phone, 
    featured, 
    newlisting, 
    tagline
  } = property;



  return (
    <Wrapper className='page-setting '>
      <div className='test'>
      <h3>{newlisting ? 'New Listing!' : ''}{featured ? 'Featured Property!' : ''}</h3>
      <div className="property-divider">
          <ProcessImages images={images}/>
          <div className='property-specs'>
             <h4>{tagline}</h4>
             <p className='address'>{address}, {city} {state}</p>
             <p>{description}</p>
             <p><span>Home Type:</span> {dwelling}</p>
             <p><span>Sqft:</span> {sqft}</p>
             <p><span>Bed:</span> {bed}</p>
             <p><span>Bath:</span> {bath}</p>
             <p><span>Price:</span> {formatPrice(price)}</p>
             <div>
               <h5 className='agent'><span>Agent:</span> {firstname} {lastname}, <span>Phone</span> {phone}</h5>
             </div>
          </div>{/* end of property-specs */}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`

.test {
  height: calc(100vh - (5em + 13em));
}

.property-divider {
  display: grid;
  gap: 4rem;
  margin-top: 1em;
}
.property-specs {
  color: var(--clr-grey-600);
}
span {
  color: var(--clr-grey-900);
}
 h4 {
  text-transform: capitalize;
  font-weight: 300;
  color: var(--clr-grey-900);
 }
 .address {
  font-weight: 300;
  color: var(--clr-grey-700);
 }
 .agent {
  font-weight: 400;
  text-transform: capitalize;
 }

@media (min-width: 900px){
  .property-divider {
    grid-template-columns: 1fr 1fr;
  }
}

`

export default SinglePropertyPage