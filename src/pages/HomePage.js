import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Services, Featured, NewListing } from '../components'

const HomePage = () => {
  return (
    <>
    <Hero hero="homeHero">
      <Banner title1="The" title2="Real" title3="Estate" title4=" Group" />
    </Hero>
    <Services />
    <Featured />
    <NewListing />
    </>
  )
}

export default HomePage