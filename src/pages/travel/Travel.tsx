import React, {useEffect} from 'react'
import Layout from '@/components/layout/Layout';
import LeftPortion from '@/components/examcitydescription/LeftPortion';
import RightPortion from '@/components/examcitydescription/RightPortion';
import './index.css'
const Travel: React.FC = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <Layout>
      <div className='flex  bg-gray-100 w-full' style={{marginTop:'10vh'}}>
      <LeftPortion />
      <RightPortion />
    </div>
    </Layout>
  );
};

export default Travel