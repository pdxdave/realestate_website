
import {team} from '../utilities/team'
import styled from 'styled-components'

const RealtorProfile = () => {
  return (
    <Wrapper className='page-setting'>
      <div className="article-container">
        {team.map(t => {
            const {id, img, sold, name, quote} = t
            return ( <article key={id}>
                      <header>
                        <img src={img} alt={name} />
                        <div>
                          <p>{name}</p>
                          <p>Sr. Realtor</p>
                        </div>
                      </header>
                      
                      <footer>
                        <p><span>Properties sold:</span> {sold}</p>
                        <blockquote>&#8220;{quote}&#8220;</blockquote>
                      </footer>
                        
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2em;
}
article {
  border-radius: 6px;
  overflow: hidden;
  padding: 1.5em 1em;
  background-color: #C2B6CB;
}

img {
  height: 120px;
  width: 120px;
  border-radius: 50%;
}

header {
  display: grid;
  grid-template-columns: .75fr 1fr;
  align-items: center;
  
}
header p {
  text-transform: capitalize;
  margin: .15em 0;
}
header p:first-child{
  font-weight: 700;
}

blockquote {
  font-style: italic;
}
footer p {
  margin-top: 1em;
}

`

export default RealtorProfile