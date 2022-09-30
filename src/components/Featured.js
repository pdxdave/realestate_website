import React from 'react'
import { usePropertiesContext } from '../context/property_context'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Property from './Property'

const Featured = () => {

  const {
    properties_loading: loading,
    properties_error: error,
    featured_properties: featured
  } = usePropertiesContext()

  // console.log(featured)

  if(loading){
    return <Loading  style={{textAlign: "center"}}/>
  }
  if(error){
    return <Error />
  }

  return (
    <Wrapper >
        <div className='title'>
            <h3>Featured<span className='title-highlite'> Properties</span></h3>
        </div>
        <div className='page-setting featured'>
           {featured.map((property) => {
            return <Property  key={property.id} {...property}/>
           })}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  .title {
    text-align: center;
  }
  .title-highlite {
     color: #F79901
  }
  
  .featured {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    row-gap: 20px;
    column-gap: 20px;
    justify-items: center;
  }


`
export default Featured

/*

.page-setting {
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

*/