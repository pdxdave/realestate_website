import styled from 'styled-components'
import {FaPhoneAlt} from 'react-icons/fa'

const Footer = () => {
  return (
    <Wrapper >
        <div className='page-setting test'>
          <address>
            <h4>The Real<span style={{color: "var(--clr-orange-accent)"}}>Estate</span> Group</h4>
            2544 SW Salmon St. <br />
            Portland, OR 97215
          </address>
          <div className='social-container'>
            <div>
               <img src='/images/facebook.svg' className='social-icon' alt="facebook"/>
            </div>
            <div className='social-item'>
              <img src='/images/snapchat.svg' className='social-icon' alt="snapchat"/>
            </div>
             <div> 
                <img src='/images/twitter.svg' className='social-icon' alt="twitter"/>
             </div>
          </div>
          <div>
               <p><FaPhoneAlt />   <span> 503-789-4155</span> </p>
          </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`

.social-container {
  display: flex;
}
.social-item {
  padding: 0 1em;
}
    
    .test {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    background-color: var(--clr-grey-800);
    height: auto;
    color: var(--clr-grey-300);

    .social-icon {
      width: 30px;
      height: 30px;
      color: white;
    }
    
    @media (max-width: 600px){
      .test {
        flex-direction: column;
      }
      .social-container {
        margin: 2rem 0;
      }
    }
`

export default Footer