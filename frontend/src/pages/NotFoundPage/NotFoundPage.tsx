import notFoundImage from '../../assets/images/notFound.png';
import './NotFoundPage.scss';

const NotFoundPage = () => (
  <div className="wrapper">
    <div className="not-found">
      <img src={notFoundImage} alt="page not found" className="not-found__image" />
      <div onClick={() => window.history.go(-1)} >
      <Button title='Go Back'/>
      </div>
    </div>
  </div>
);

export default NotFoundPage;