
import {team} from '../utilities/team'
import styled from 'styled-components'

const RealtorProfile = () => {
  return (
    <Wrapper>
        {team.map(t => {
            const {id, img, sold, name, quote} = t
            return ( <article key={id}> 
                        <p>{name}</p>
                    </article> 
                )
        })}
    </Wrapper>
  )
}

const Wrapper = styled.section`


`

export default RealtorProfile