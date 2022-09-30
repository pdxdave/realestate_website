import React from 'react'
import { usePropertiesContext } from '../context/property_context'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Property from './Property'
import Title from './Title'

const NewListing = () => {

  const {
    properties_loading: loading,
    properties_error: error,
    newListing_properties: newListings
  } = usePropertiesContext()

  console.log(newListings)

  if(loading){
    return <Loading  msg="Your New Listings Are Loading..."/>
  }
  if(error){
    return <Error />
  }

  return (
    <Wrapper >
        <Title title1="New" title2="Listings"/>
        <div className='page-setting featured'>
           {newListings.map((property) => {
            return <Property  key={property.id} {...property}/>
           })}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
  .featured {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    row-gap: 20px;
    column-gap: 20px;
    justify-items: center;
  }


`
export default NewListing

