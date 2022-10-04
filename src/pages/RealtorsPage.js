import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { RealtorProfile, ServicesExtended } from "../components";

const RealtorsPage = () => {
  return (
    <>
    <Hero hero="realtorsHero">
      <Banner title1="The" title2="Real" title3="Estate" title4=" Team" />
    </Hero>
    <div className="page-clear page-setting">
      <ServicesExtended />
      <RealtorProfile />
    </div>
    
   </> 
  )
}

export default RealtorsPage