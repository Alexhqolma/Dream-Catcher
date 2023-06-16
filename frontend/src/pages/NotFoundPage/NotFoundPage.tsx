import notFoundImage from '../../assets/images/notFound.png';
import { Button } from '../../components/Button';
import './NotFoundPage.scss';

const NotFoundPage = () => (
  <main className="NotFoundPage">
    <img src={notFoundImage} alt="page not found" className="not-found__image" />
    
    <Button title='Go Back' onClick={() => window.history.go(-1)}/>
  </main>
);

export default NotFoundPage;