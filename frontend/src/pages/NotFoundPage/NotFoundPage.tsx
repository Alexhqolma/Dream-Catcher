import notFoundImage from '../../assets/images/notFound.png';
import { CustomButton } from '../../components/UI/CustomButton';
import './NotFoundPage.scss';

const NotFoundPage = () => (
  <main className="NotFoundPage">
    <img src={notFoundImage} alt="page not found" className="not-found__image" />

    <CustomButton title='Go Back' onClick={() => window.history.go(-1)} />
  </main>
);

export default NotFoundPage;