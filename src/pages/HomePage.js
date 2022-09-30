import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Services, Featured } from '../components'

const HomePage = () => {
  return (
    <>
    <Hero hero="homeHero">
      <Banner title1="The" title2="Real" title3="Estate" title4=" Group" />
    </Hero>
    <Services />
    <Featured />
    </>
  )
}

export default HomePage