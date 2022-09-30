import React, {useEffect} from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { usePropertiesContext } from '../context/property_context';
import { single_property_url as url} from '../utilities/misc';
import {
  Loading,
  Error,
} from '../components'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

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
    return <Error />
  }

  const {
    dwelling, 
    images, 
    sqft, 
    bed, 
    bath, 
    price, 
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
    <Wrapper>
      <p>{description}</p>
    </Wrapper>
  )
}

const Wrapper = styled.main`

`

export default SinglePropertyPage