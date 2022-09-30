import styled from "styled-components"

const Loading = ({msg}) => {
  return (
    <Wrapper className="page-setting">
      <div>{msg}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
 
  div {
    text-align: center;
    font-size: 2rem;
  }


`
export default Loading