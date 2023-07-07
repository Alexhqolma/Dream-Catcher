import classNames from "classnames";

import { Dream } from "../../../../types/Dream";
import { CustomButton } from "../../../UI/CustomButton";
import { MouseEventHandler } from "react";

import './Item.scss';

interface ItemProps {
  isCurrent: boolean;
  item: Dream;
  className?: string;
  onClick: MouseEventHandler;
  tabIndex: number;
}

export const Item:React.FC<ItemProps> = ({
  isCurrent,
  item,
  className,
  onClick,
  tabIndex,
}) => {
  return (
    <li 
    >
      <CustomButton 
        onClick={onClick}
        tabIndex={tabIndex}
        dataValue={item.id}
        className={classNames('Item', { 'Item--current': isCurrent }, className)}
      >
        <p>{item.title}</p>
      </CustomButton>
    </li>
  );
};