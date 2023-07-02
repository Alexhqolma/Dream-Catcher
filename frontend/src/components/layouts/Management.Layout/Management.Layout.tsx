import React from 'react';

interface ManagementLayoutProps<T> {
  list: T[];
}

export const ManagementLayout: React.FC<ManagementLayoutProps<unknown>> = <T,>(
  { list }: ManagementLayoutProps<T>,
) => {
  return (
    <section className='ManagementLayout'>
      <div className='ManagementLayout__controls'>
        {/* <Search /> */}
        {/* <Filter /> */}

        {/* <List /> */}
        <List list={list} />
      </div>

      <div className='ManagementLayout__content'>
        {/* <Card /> */}
        {/* <EditCard /> */}

        {/* <Messaging /> */}
      </div>
    </section>
  );
};

interface ListProps<T> {
  list: T[];
}

const List: React.FC<ListProps<unknown>> = <T,>({ list }: ListProps<T>) => {
  return (
    <ul>
      {list.map((el: T, index) => (
        <li key={index}>{}</li>
      ))}
    </ul>
  );
};
