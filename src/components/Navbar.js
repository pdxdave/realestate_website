import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import {navLinks} from '../utils/misc'
import { useMobileContext } from '../context/nav_context'

const Navbar = () => {
  const {openMobile} = useMobileContext()
  return (
    <Wrapper>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
                <h4>The Real<span style={{color:"orange"}}>Estate</span> Group</h4>
            </Link>
            <button type="button" className='nav-toggle' onClick={openMobile}>
              <GiHamburgerMenu  />
            </button>
          </div>
          <ul className='nav-links'>
            {navLinks.map(link => {
              const {id, text, url} = link
              return <li key={id}> <Link to={url}>{text}</Link></li>
            })}
          </ul>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

   

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1200px;
    position: sticky;
  }
  .nav-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-toggle {
    font-size: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .nav-links {
    display: none;
  }

  a {
    color: var(--clr-grey-700)
  }

  @media (min-width: 900px){
    .nav-toggle{ 
      display: none;
    }
    .nav-links {
      display: flex ;
      justify-content: center;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        text-transform: capitalize;
        font-size: 1.2rem;
        color: var(--clr-grey-700)
      }
    }
  }
`

export default Navbar