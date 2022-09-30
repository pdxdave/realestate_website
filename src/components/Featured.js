import React from 'react'
import { usePropertiesContext } from '../context/property_context'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'

const Featured = () => {

  const {
    properties_loading: loading,
    properties_error: error,
    featured_properties: featured
  } = usePropertiesContext()

  console.log(featured)

  if(loading){
    return <Loading />
  }
  if(error){
    return <Error />
  }

  return (
    <Wrapper className='page-setting'>
        <div className='title'>
            <h3>Featured<span className='title-highlite'> Properties</span></h3>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`


`
export default Featured