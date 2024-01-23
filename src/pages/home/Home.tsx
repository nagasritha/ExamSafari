

import HeroSection from '../../components/herosection/HeroSection'
import Stats from '@/components/stats/Stats'
import Services from '@/components/services/Services'
import ExamCity from '@/components/examcity/ExamCity'
import AcoFeature from '@/components/feature/AcoFeature'
import TravelFeature from '@/components/feature/TravelFeature'
import Faq from '@/components/Faqs/Faq'
import Bannar1 from '@/components/bannar/Bannar1'
import Layout from '@/components/layout/Layout'

function Home() {  
  return (
   
   <Layout>
        <HeroSection/>  
        <Stats/> 
        <Services/>
        <ExamCity/>
        <AcoFeature/>
        <Bannar1/>
        <TravelFeature/> 
        <Faq/>
  </Layout>
       
        
  )
}

export default Home