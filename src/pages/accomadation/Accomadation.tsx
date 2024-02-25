import React from 'react'
import Layout from '@/components/layout/Layout';
import LeftPortion from '@/components/examcitydescription/LeftPortion';
import RightPortion from '@/components/examcitydescription/RightPortion';
import './index.css'
const Accomadation: React.FC = () => {
  return (
    <Layout>
      <div className='flex  bg-gray-100 w-full' style={{marginTop:'10vh'}}>
      <LeftPortion />
      <RightPortion />
    </div>
    </Layout>
  );
};

export default Accomadation;