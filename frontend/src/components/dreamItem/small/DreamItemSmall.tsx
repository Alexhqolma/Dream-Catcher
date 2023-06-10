import { Dream } from '../../../types/Dream';

import './DreamItemSmall.scss';

type DreamItemProps = {
  dream: Dream;
};

// const dream = {
//   id: 1,
//   title: 'title',
//   body: 'body',
//   userId: 1,
//   executantId: 1,
//   completed: false,
//   createAt: '2021-10-10',
//   photo: 'https://images.unsplash.com/photo-1633830007417-8b0b0b0b0b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80',
// }

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

  // const {
  //   id,
  //   title,
  //   body,
  //   userId,
  //   executantId,
  //   completed,
  //   createAt,
  //   photo,
  // } = dream;

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