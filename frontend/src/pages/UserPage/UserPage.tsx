import React from 'react';
import { DreamForm, DreamFormType } from '../../components/DreamForm';

const UserPage: React.FC = () => {
  return (
    <main className="UserPage">
      <h1>UserPage</h1>    

      <DreamForm
        title='Create dream' 
        startTabIndex={0} 
        type={DreamFormType.CREATE}      
      />
    </main>
  );
}

export default UserPage;
