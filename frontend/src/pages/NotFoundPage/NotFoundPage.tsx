import './NotFoundPage.scss';
import notFoundImage from '../../assets//images/notFound.png';

export const NotFoundPage = () => (
  <div className="wrapper">
    <div className="not-found">
      <img src={notFoundImage} alt="page not found" className="not-found__image" />
      
      <button
        type="button"
        className="not-found__button"
        onClick={() => window.history.go(-1)}
      >
        Go Back
      </button>
    </div>
  </div>
);