import React from 'react';
import './DreamItem.scss';
import Dream from '../../types/Dream';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addToCart, removeFromCart, selectCart } from '../../store/cart/cartSlice';
import { selectFavorite, addToFavorite, removeFromFavorite } from '../../store/cart/favoriteSlice';

type Props = {
  DreamItem: Dream;
};

export const DreamItem: React.FC<Props> = ({ Dream }) => {
  const fulfilledDreams = useAppSelector(selectCart);
  const gadgetsInFavorite = useAppSelector(selectFavorite);

  const dispatch = useAppDispatch();

  const {
    id;
    title;
    description;
    date;
    isCompleted;
} = DreamItem;

const handleFulfillClick = () => {
  if (isAddedToCart) {
    dispatch(removeFromCart(DreamItem.id));
  } else {
    dispatch(addToCart(DreamItem));
  }
};

const handleAddToFavoriteClick = () => {
  if (isAddedToFavorite) {
    dispatch(removeFromFavorite(DreamItem.id));
  } else {
    dispatch(addToFavorite(DreamItem));
  }
};

return (
  <div className="card">
    <Link to={`/${DreamItem.category}/${DreamItem.DreamItemId}`}>
      <div className="card__header">
        <img
          className="card__image"
          src={image}
          alt={name}
        />

        <h2 className="card__title">{`${name} (iMT9G2FS/A)`}</h2>

        <div className="card__price">
          <p className="card__price__actual">{`$${price}`}</p>
          <p className="card__price__full">{`$${fullPrice}`}</p>
        </div>
      </div>
    </Link>

    <div className="card__line"></div>

    <div className="card__specs">
      <div className="card__container">
        <p className="card__specs__text">Screen</p>
        <p className="card__specs__value">{screen}</p>
      </div>

      <div className="card__container">
        <p className="card__specs__text">Capacity</p>
        <p className="card__specs__value">{capacity}</p>
      </div>

      <div className="card__container">
        <p className="card__specs__text">RAM</p>
        <p className="card__specs__value">{ram}</p>
      </div>
    </div>

    <div className="card__buy">
      <Fulfill isFulfilled={isFulfilled} onClick={handleFulfillClick} />
÷≥
      <button
        type="button"
        className={classNames(!isAddedToFavorite ? 'card__buy__favorite' : 'card__buy__favorite--is-added')}
        onClick={handleAddToFavoriteClick}
      >
      </button>
    </div>
  </div>
);
};