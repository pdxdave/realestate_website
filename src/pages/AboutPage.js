import Hero from '../components/Hero'
import Banner from '../components/Banner'
import styled from 'styled-components'

const AboutPage = () => {
    return (
      <>
        <Hero hero="aboutHero">
            <Banner title1="About" title2="Real" title3="Estate" title4=" Group">
            </Banner>
        </Hero>
        <section className='page-setting'>
        <h1>Our Story</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem expedita, 
           voluptatem quae, sunt nam dolorem et tempore qui eius reiciendis unde sit
           libero fugiat quisquam? Obcaecati ducimus molestiae laborum nemo accusamus
           doloremque delectus. Atque cumque eius quam eaque voluptate at harum ut quo
           odit nihil! Perspiciatis nesciunt omnis fugiat earum consequuntur, atque 
           aut provident dolore consequatur ut totam voluptates quam vitae obcaecati 
           reprehenderit neque eum aperiam minus quae blanditiis quidem impedit vero. 
           Veritatis obcaecati sint itaque reprehenderit eveniet quasi iste voluptatibus 
           voluptatem aperiam, facilis dolor voluptatum libero laudantium doloribus aliquam 
           dolores nesciunt culpa, modi asperiores at? Nihil quo omnis facilis commodi tempore 
           necessitatibus enim? Saepe commodi aspernatur quis ea distinctio, laboriosam 
           eaque dignissimos in mollitia natus omnis, cum illum minima?</p>
        </section>
        <section className="about-story" style={{display: "grid", gridTemplateColumns: "1fr 1fr", alignContent: "center", padding: "0 15px" }}>
            <div>
             
            </div>
            <div>
              <h1>Our Values</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe ipsa nemo voluptate eligendi dolore placeat recusandae iure, quod similique fugit aut doloribus modi, ex nesciunt eaque? Consectetur sit debitis unde? Est odio aspernatur iste nemo natus sunt modi nihil id aliquam voluptates autem nostrum impedit, maiores eius, placeat animi?</p>
            </div>
        </section>

        <section className='page-setting'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias quod fugiat dolor aliquid expedita aut natus repellat dicta voluptatibus ullam quas velit possimus eos pariatur nihil quis, fugit, doloremque, ad maiores! Neque quasi ducimus, praesentium eligendi corrupti impedit quo perferendis id magnam fuga voluptatum adipisci vitae at consectetur dicta nam, sapiente illum voluptate, placeat ullam quos! Accusamus eos ipsum, possimus iure excepturi ab eius quam similique! Numquam velit dignissimos, odit ab fuga quo, placeat obcaecati sapiente voluptates tempora animi magnam sequi facilis dolores molestiae dolor rem officiis sed nostrum laborum debitis. Numquam, esse dolorum. Illum fuga obcaecati officia veniam.</p>
        </section>
      
      </>
       
    )
  }
  

  export default AboutPage