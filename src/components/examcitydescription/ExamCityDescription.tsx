
import Layout from '../layout/Layout';
import LeftPortion from './LeftPortion';
import RightPortion from './RightPortion';
import './index.css'
const ExamCityDescription: React.FC = () => {
  return (
    <Layout>
      <div className='flex  bg-gray-100 w-full' style={{marginTop:'10vh'}}>
      <LeftPortion />
      <RightPortion />
    </div>
    </Layout>
  );
};

export default ExamCityDescription;
