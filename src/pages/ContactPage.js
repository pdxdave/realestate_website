
import styled from 'styled-components'

const ContactPage = () => {
  return (
    <Wrapper>
        <div className="grid-container">
            <div className='form-side'>
                <div className='contact-title'>
                    <h2>Let's Talk <span style={{color: "#F79901"}}>Homes!</span></h2>
                </div>
                <div className="form-container">
                    <form action="https://formspree.io/f/spinout11@hotmail.com" method="POST">
                        <div className="form-control">
                            <label htmlFor="name"></label>
                            <input type="text" placeholder='name'/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="name"></label>
                            <input type="text" placeholder='name'/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="name"></label>
                            <textarea name="" id="" cols="30" rows="10" placeholder='message'/>
                        </div>
                    <button className='btn-contact'>Send</button>
                    </form>
                </div>{/* end of form container */}
                
            </div>
            <div className='formless-side'></div>

        </div>
    </Wrapper>
  )
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
        }
        .formless-side {
            display: none;
        }
    }
`

export default ContactPage