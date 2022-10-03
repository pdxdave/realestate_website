
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react';

const ContactPage = () => {
    const [state, handleSubmit] = useForm("mwkzbbzb");
  if (state.succeeded) {
      return <p>Thank You. We Will Get Back To You Soon!</p>;
  }
  return (
    <Wrapper>
        <div className="grid-container">
            <div className='form-side'>
                <div className='contact-title'>
                    <h2>Let's Talk <span style={{color: "#F79901"}}>Homes!</span></h2>
                </div>
                <div className="form-container">
                    <form action="https://formspree.io/f/mwkzbbzb" method="POST" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label htmlFor="name"></label>
                            <input type="text" placeholder='name'/>
                            <ValidationError 
                                prefix="Name" 
                                field="name"
                                errors={state.errors}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="email"></label>
                            <input type="text" placeholder='email'/>
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="message"></label>
                            <textarea name="" id="" cols="20" rows="5" placeholder='message'/>
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                    <button className='btn-contact' type="submit" disabled={state.submitting}>Send</button>
                    </form>
                </div>{/* end of form container */}
                
            </div>
            <div className='formless-side'></div>

        </div>
    </Wrapper>
  )
}
function App() {
    return (
      <ContactPage />
    );
  }
  export default App;
const Wrapper = styled.main`

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: calc(100vh - (5em + 9em));
    }

    .form-container {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        
    }
    .contact-title {
        padding: 5em 0;
        text-align: center;
    }
    label {
        display: block;
    }
    input, textarea {
        width: 600px;
        max-width: 90vw;
        font-size: 1.2rem;
        text-indent: 4px;
        margin-bottom: 1.2em;
        outline: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid var(--clr-grey-400);
        background: transparent;
    }
    textarea {
        resize: none;
    }
    input {
        padding: .25em 0;
    }

    .btn-contact {
        width: 100%;
        font-family: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        border: 1px solid var(--clr-grey-400);
        background: transparent;
        border-radius: 4px;
        transition: 0.3s ease-in-out;
    }
    .btn-contact:hover {
        background: var(--clr-grey-400);
        color: var(--clr-grey-100);
    }

    @media (max-width: 1270px){
        .grid-container {
            grid-template-columns: 1fr;
            /* min-height: calc(100vh - (5em + 20em)); */
        }
        .formless-side {
            display: none;
        }
        .btn-contact {
            margin-bottom: 3em;
        }
    }
`

// export default ContactPage