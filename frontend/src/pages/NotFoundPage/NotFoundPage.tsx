import { CustomButton } from '../../components/UI/CustomButton';

import './NotFoundPage.scss';

const NotFoundPage = () => (
  <main className="NotFoundPage">
    <CustomButton title='Go Back' onClick={() => window.history.go(-1)} />
  </main>
);

export default NotFoundPage;