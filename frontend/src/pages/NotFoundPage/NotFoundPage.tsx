import { CustomButton } from '../../components/UI/CustomButton';

import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => (
  <main className="NotFoundPage">
    <CustomButton 
      title='Go Back' 
      onClick={() => window.history.go(-1)} 
      tabIndex={0} 
    />
  </main>
);

export default NotFoundPage;