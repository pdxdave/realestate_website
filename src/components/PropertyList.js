
import { useFilterContext } from "../context/filter_context"
import Property from "./Property"
import styled from "styled-components"

const PropertyList = () => {
    const {filtered_properties: properties} = useFilterContext()
  
  return (
    <Wrapper>
      {properties.map((property) => {
        return <Property key={property.id} {...property}/>
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    row-gap: 20px;
    column-gap: 10px;
    justify-items: center; 

`
export default PropertyList