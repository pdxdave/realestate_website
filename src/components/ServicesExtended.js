import {services} from '../utilities/serviceExtended';
import styled from 'styled-components'


const ServicesExtended = () => {
  return (
    <Wrapper>
        
        <div className="article-container">
            {services.map(service => {
                return (
                <article key={service.id}>
                    <img src={service.img} alt={service.title} className="services-img" />
                    <h4>{service.title}</h4>
                    <p>{service.text}</p>
                    <ul>
                        {service.points.map((point) => {
                            return <li key={point.id} className="services-points">{point.item}</li>
                        })}
                    </ul>
                </article>
                )
            })}
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`

    .article-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minMax(300px, 1fr));
        grid-gap: 2em;
    }

    .article-container ul{
        padding: 5%;
    }
    
   .services-img {
        width: 75px;
        height: 75px;
    } 
   article h4 {
        padding: 1em 0;
   }
   article {
        text-align: center;
        padding: 1em;
        border-radius: 8px;
   }
   .services-points {
        text-align: left;
        list-style-type: disc;
   }
`



export default ServicesExtended