import { Dream } from '../../../types/Dream';

import './DreamItemSmall.scss';

type DreamItemProps = {
  dream: Dream;
};

export const DreamItemSmall: React.FC<DreamItemProps> = ({
    dream: { 
      id,
      title,
      body,
      userId,
      handler,
      status,
      // createAt,
      photo,
    }
  }) => {

  const handleFulfill = () => {
    // dispatch(FulfillDream(id));
  };

  return (
    <div className="card">

      <div className="card__line"></div>

      <div className="card__specs">
        <div className="card__container">
          <p className="card__specs__text">title</p>
          <p className="card__specs__value">{title}</p>
        </div>

        <div className="card__container">
          <p className="card__specs__text">body</p>
          <p className="card__specs__value">{body}</p>
        </div>

        <div className="card__container">
          <p className="card__specs__text">completed</p>
          <p className="card__specs__value">{status}</p>
        </div>

        <div className="card__container">
          <p className="card__specs__text">createAt</p>
          <p className="card__specs__value">{'createAt'}</p>
        </div>

        <div className="card__container">
          <p className="card__specs__text">id</p>
          <p className="card__specs__value">{id}</p>
        </div>

        <div className="card__container">
          <p className="card__specs__text">userId</p>
          <p className="card__specs__value">{userId}</p>
        </div>

        <div className="card__container">
          <p className="card__specs__text">executantId</p>
          <p className="card__specs__value">{handler}</p>
        </div>

        <div className="card__container">
         <img src={photo || ''} alt="dream" className="card__specs__img" />
        </div>

      </div>

      <div className="card__buy">
        <button onClick={handleFulfill}>Fulfill Dream</button>
      </div>
    </div>
  );
};