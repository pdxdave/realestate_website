import {services} from '../utilities/services'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Services = () => {
  return (
    <Wrapper className='page-setting'>
        <div className='title'>
            <h3>Our<span className='title-highlite'> Services</span></h3>
        </div>
        <div className="article-container">
            {services.map(service => {
                return (
                <article key={service.id}>
                    <img src={service.img} alt={service.title} className="services-img" />
                    <h4>{service.title}</h4>
                    <p>{service.text}</p>
                    <Link to="/realtors"> 
                        <button className='btn-small'>More Info</button>
                    </Link>
                </article>
                )
            })}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    
    .title {
        text-align: center;
        padding: 2em 3em;
    }
    .title-highlite {
        color: var(--clr-orange-accent);
    }

    .article-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minMax(300px, 1fr));
        grid-gap: 2em;
    }
    
   .services-img {
        width: 75px;
        height: 75px;
    } 

   article {
    text-align: center;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.46);
    padding: 1em;
    border-radius: 8px;
   }
   article h4 {
    padding: 1em 0;
   }
   

  @media (max-width: 900px){
    .article-container {
        grid-template-columns: 1fr;
    }
  } 

`

export default Services