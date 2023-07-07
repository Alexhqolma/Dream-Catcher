import { ReactNode } from "react";

import './CenteredWrapper.scss'

export enum CenteredWrapperType {
  DIV,
  MAIN,
  SECTION,
  ARTICLE,
}

interface CenteredWrapperProps {
  children?: ReactNode;
  type?: CenteredWrapperType; 
}

export const CenteredWrapper:React.FC<CenteredWrapperProps> = ({ 
  children,
  type = CenteredWrapperType.DIV,
}) => {
  if (type === CenteredWrapperType.MAIN) {
    return (
      <main className="CenteredWrapper">
        {children}
      </main>
    );
  }
  
  if (type === CenteredWrapperType.ARTICLE) {
    return (
      <article className="CenteredWrapper">
        {children}
      </article>
    );
  }
  
  if (type === CenteredWrapperType.SECTION) {
    return (
      <section className="CenteredWrapper">
        {children}
      </section>
    );
  }
  
  return (
    <div className="CenteredWrapper">
      {children}
    </div>
  );
};