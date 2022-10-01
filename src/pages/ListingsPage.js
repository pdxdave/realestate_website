import styled from "styled-components"
import { Filters, PropertyList } from "../components"
import Sort from "../components/Sort"


const ListingsPage = () => {
    return (
      <main>
        <Wrapper className="page-setting">
          <div className="properties">
            <Filters />
            <div>
              <Sort />
              <PropertyList />
            </div>
          </div>
        </Wrapper>
      </main>
    )
  }
  
  const Wrapper = styled.div`
  
  .properties {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px){
    .properties {
      grid-template-columns: 200px 1fr;
    }
  }
  
  `
  
  export default ListingsPage