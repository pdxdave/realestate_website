import React from 'react';
import styled from 'styled-components'
import {useState} from 'react'
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("mwkzbbzb");
  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const funky = (e) => {
    e.preventDefault()
    handleSubmit()
  }

  if(state.succeeded){
    setName('')
    setEmail('')
    setMessage('')
  }
  
  return (
    <Wrapper>
      <div className="grid-container">
        <div className="form-side">
          <div className='contact-title'>
              <h2>Let's Talk <span style={{color: "var(--clr-orange-accent)"}}>Homes!</span></h2>
          </div>
          <div className="form-container">
            <form onSubmit={() => funky} action="https://formspree.io/f/mwkzbbzb" method="POST">
                <label htmlFor="name"></label>
                <input
                  id="name"
                  type="name" 
                  name="name"
                  placeholder='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email"></label>
                <input
                  id="email"
                  type="email" 
                  name="email"
                  placeholder='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
                <button type="submit" disabled={state.submitting} className="btn-contact">
                  Submit
                </button>
           </form>
           </div>{/* end of form container */}
        </div>{/* end of form divider */}
        <div className='formless-side'></div>
    </div>{/* end of grid container */}
    </Wrapper>
  );
}
function App() {
  return (
    <ContactForm />
  );
}

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

        width: 600px;
        max-width: 90vw;
        margin: 0 auto;
        
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

export default App;