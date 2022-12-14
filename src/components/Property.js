import styled from 'styled-components'
import {FaBed, FaBath} from 'react-icons/fa'
import {TbZoomInArea} from 'react-icons/tb'
import {Link} from 'react-router-dom'
import { formatPrice } from '../utilities/helper'

const Property = ({city, state, url, sqft, dwelling, bed, bath, price, tagline, id}) => {
  
  return (
    <Wrapper>
         <img src={url} alt="location" />
         <header className='property-header'>
          <p className='property-price'>{formatPrice(price)}</p>
          <p className='property-tagline'>{tagline}</p>
          <p className='proptery-dwelling'>{dwelling}</p>
          <p>{city}<span>, {state} </span></p>
         </header>
      
       
        <footer>
          <span><TbZoomInArea /> {sqft} sqft </span>
          <span> <FaBed /> {bed} bed{bed > 1 ? 's' : ''}</span>
          <span><FaBath /> {bath} bath{bath > 1 ? 's' : ''}</span>
        </footer>
        <Link to={`/listings/${id}`}>
            <button className='btn'>more info</button>
        </Link>
        
    </Wrapper>
  )
}

const Wrapper = styled.article`
 

  width: 400px;
  max-width: 100%;

  header {
    padding: 0 .5em;
  }

  img{
    width: 100%;
    height: 300px;
    object-fit: fill;
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
    background: #5D668D;
    color: #fff;
    cursor: pointer;
  }

  .property-tagline {
    font-weight: bold;
  }
  
`

export default Property