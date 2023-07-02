import { ButtonType, CustomButton } from '../../components/UI/CustomButton';

import './NotFoundPage.scss';

const NotFoundPage = () => (
  <main className="NotFoundPage">
    <p>404</p>
    <p>Page not found</p>
    <CustomButton 
      to="/" title='Home page' 
      type={ButtonType.BUTTON} 
      tabIndex={7} />
  </main>
);

export default NotFoundPage;