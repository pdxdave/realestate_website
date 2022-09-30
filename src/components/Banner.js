import styled from "styled-components"

const Banner = ({title1, title2, title3, title4}) => {
  
  return (
    <Wrapper>
      <h2 className="banner_info">{title1} {title2}<span style={{color: "#F79901"}}>{title3}</span>{title4}</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  .banner_info {
    position: absolute;
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%);
    background: rgba(255,255,255, 0.7);
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
 @media (min-width: 900px){
  .banner_info{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.5rem 1rem;
    width: 600px;
    border-radius: 8px;
  }
    
 }
`


export default Banner