import classNames from "classnames";

import './AsideControls.scss';
import { List } from "../List/List";
import { MouseEventHandler, ReactNode } from "react";
import { Dream } from "../../../../types/Dream";

interface AsideControlsProps {
  current: Dream | null;
  list: Dream[];
  className?: string;
  onClickItem: MouseEventHandler;
  child?: ReactNode;
}

export const AsideControls:React.FC<AsideControlsProps> = ({
  current,
  list,
  className,
  onClickItem,
  child,
}) => {


  return (
    <aside className={classNames('AsideControls', className)}>
  
      {/* <Search /> */}
      {/* <Filter /> */}

      <List
        current={current}
        list={list} 
        onClickItem={onClickItem} 
        tabIndex={0}
        child={child} 
      />
    </aside>
  );
};