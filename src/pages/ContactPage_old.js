import styled from 'styled-components'


const ContactPage = () => {
    return (
      <Wrapper >
        <div className="container">
        <div className='contact-header'>
          <div className='test'>
            <h1>Let's Talk <span style={{color: "var(--clr-orange-accent)"}}>Homes!</span></h1>
          </div>
          
        </div>
        <div className='contact-form'>
            <div className='form-container'>
              <form action="https://formspree.io/f/spinout11@hotmail.com" method="POST">
                <label htmlFor="name"></label>
                <input type="text" placeholder='name'/>
                <label htmlFor="email" ></label>
                <input type="text" placeholder='email'/>
                <label htmlFor="message" ></label>
                <textarea name="" id="" cols="30" rows="10" placeholder='message'/>
                <button className='btn-form'>Send</button>
              </form>
            </div>
        </div>
       </div>
      </Wrapper>
    )
  }
  
  const Wrapper = styled.main`

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* min-height: calc(100vh - (5em + 7em)); */
    min-height: calc(100vh - (5em + 9em));
  }

  .contact-header {
    position: relative;
  }

  .contact-form {
      background-color:#B2DDE1;
    }

  .test {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
    }


////////////////////////

   .contact-form {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      align-content: center;
    }
    
    label, input, button {
      display: block;
    }
    input {
      margin-bottom: 1.5em;
    }
    textarea {
      resize: none;
    }
    input, textarea {
      width: 90vw;
      max-width: 600px;
      border-left: none;
      border-right: none;
      border-top: none;
      border-bottom: 1px solid var(--clr-grey-800);
      background: transparent;
      font-size: 1rem;
      outline: none;
    }

    .btn-form {
      width: 100%;
      font-family: inherit;
      font-size: 1.3rem;
      margin-top: 1em;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background-color: transparent;
      color: var(--clr-grey-800);
      border: 1px solid var(--clr-grey-800);
      transition: 0.3s ease-in-out;
    }
    .btn-form:hover {
      background-color: var(--clr-grey-300);
    }
   


    @media (max-width: 600px){
      .contact-header {
        display: none;
      }
      .contact-form {
        min-height: inherit;
      }
      .container {
        grid-template-columns: 1fr;
        min-height: calc(100vh - (5em + 20em));
      }
    }
  `

  
  export default ContactPage