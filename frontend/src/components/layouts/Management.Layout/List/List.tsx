import classNames from "classnames";

import { Dream } from "../../../../types/Dream";
import { Item } from "../Item/Item";
import { Fragment, MouseEvent, MouseEventHandler, ReactNode, useState } from "react";

import './List.scss';

interface ListProps {
  current: Dream | null;
  list: Dream[];
  className?: string;
  onClickItem: MouseEventHandler;
  tabIndex: number;
  child?: ReactNode;
}

export const List:React.FC<ListProps> = ({
  current,
  list,
  className,
  onClickItem,
  tabIndex,
  child,
}) => {
  const [showChild, setShowChild] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    current?.id === e.currentTarget.dataset.valueId
     ? setShowChild(show => !show)
     : setShowChild(true);

    return onClickItem(e);
  }

  return (
    <ul className={classNames('List', className)}>
      {list.map((dream, index) => (
        <Fragment key={dream.id}>
          {current?.id === dream.id && child && showChild
            ? child
            : <Item
                isCurrent={current?.id === dream.id}
                item={dream} 
                onClick={onClick} 
                tabIndex={tabIndex + index}        
              />
          }
        </Fragment>
      ))}
    </ul>
  );
};
