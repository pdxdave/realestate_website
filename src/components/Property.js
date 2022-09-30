import styled from 'styled-components'
import {FaBed, FaBath} from 'react-icons/fa'
import {TbZoomInArea} from 'react-icons/tb'

const Property = ({city, state, url, sqft, dwelling, bed, bath, price, tagline, id}) => {
  return (
    <Wrapper>
         <img src={url} alt="location" />
         <header className='property-header'>
          <p>${price}</p>
          <p>{tagline}</p>
          <p>{dwelling}</p>
          <p>{city}<span>, {state} </span></p>
         </header>
      
       
        <footer>
          <span><TbZoomInArea /> {sqft} sqft </span>
          <span> <FaBed /> {bed} bed{bed > 1 ? 's' : ''}</span>
          <span><FaBath /> {bath} bath{bath > 1 ? 's' : ''}</span>
        </footer>
        <button className='btn'>more info</button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  /* border: 1px solid red; */

  width: 400px;
  max-width: 100%;

  header {
    padding: 0 .5em;
  }

  img{
    width: 100%;
    height: 300px;
    object-fit: scale-down;
    padding: 0px;
    margin: 0px;
  }
  .property-header > p {
    margin: 0px;
    text-transform: capitalize;
  }
  
  footer {
    display: flex;
    justify-content: space-between;
    padding: .5em;
    background-color: var(--clr-grey-300);
  }
  
  span {
    font-size: 1rem;
  }


  .btn {
    width: 100%;
    font-family: inherit;
    text-transform: capitalize;
    font-size: 1.2rem;
    border: none;
    padding: .25em 0;
    margin-top: .25em;
  }

`

export default Property