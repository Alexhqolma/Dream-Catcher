import { useEffect, useState } from 'react';
import { selectToken } from '../../store/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { registerUserNODE, SagaActions } from '../../store/sagas/actions';
import { CustomButton } from '../UI/CustomButton';

import './JavaControls.scss';

export const JavaControls: React.FC = () => {
  const dispatch = useAppDispatch();

  const [token, setToken] = useState('');

  
  const loginJava = async () => {
    console.log('loginDream');

    const user = {
      "email": "admin@admin.com",
      "password": "adminadmin",
    };
    
    const response = await fetch(
      'http://localhost:6868/auth/login',
      {
        // mode: 'no-cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    ).then(res => res.json());

    console.log(response.token);
    setToken(response.token);
  };
 
  const createDream = async () => {
    console.log('createDreamJava');

    const dream = {
      "title": "title new dream",
      "body": "body new dream",
    };
    
    const response = await fetch(
      'http://localhost:6868/dreams/create',
      {
        // mode: 'no-cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(dream),
      }
    ).then(res => res.json());

    console.log(response);
  };

  const updateDream = async () => {
    console.log('updateDream');

    const dream = {
        "userId": "1",
      "title": "title new dream version 1",
      "body": "body new dream version 2",
    };
    
    const response = await fetch(
      'http://localhost:6868/dreams/1',
      {
        // mode: 'no-cors',
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(dream),
      }
    ).then(res => res.json());

    console.log(response);
  };

  const takeDream = async (value: number) => {
    console.log('takeDream');

    const dream = {
      "title": "title new dream version 1",
      "body": "body new dream version 2",
    };
    
    const response = await fetch(
      `http://localhost:6868/dreams/drop-dream/3`,
      {
        // mode: 'no-cors',
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(dream),
      }
    ).then(res => res.json());

    console.log(response);
  };

  const getDreamById = async () => {
    console.log('findDreamBuId');
   
    const response = await fetch(
      'http://localhost:6868/dreams/1',
      {
        // mode: 'no-cors',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${token}`,
        },
        // body: JSON.stringify(dream),
      }
    ).then(res => res.json());

    console.log(response);
  };

  const getDreams = async () => {
    console.log('findDreamBuId');
   
    const response = await fetch(
      'http://localhost:6868/dreams',
      {
        // mode: 'no-cors',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${token}`,
        },
        // body: JSON.stringify(dream),
      }
    ).then(res => res.json());

    console.log(response);
  };

  const getDreamsPage1Dream5 = async () => {
    console.log('getDreamsPage1Dream5');
   
    const response = await fetch(
      'http://localhost:6868/dreams?page=1&size=5',
      {
        // mode: 'no-cors',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${token}`,
        },
        // body: JSON.stringify(dream),
      }
    ).then(res => res.json());

    console.log(response);
  };

  const getUser = async () => {
    console.log('getUser');
   
    const response = await fetch(
      'http://localhost:6868/dreams/user/1',
      {
        // mode: 'no-cors',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        // body: JSON.stringify(dream),
      }
    ).then(res => res.json());

    console.log(response);
  };

  const getMyHandedDreams = async () => {
    console.log('getMyHandedDreams');
   
    const response = await fetch(
      'http://localhost:6868/dreams/handler',
      {
        // mode: 'no-cors',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        // body: JSON.stringify(dream),
      }
    ).then(res => res.json());

    console.log(response);
  };

  const deleteDream = async (value: number) => {
    console.log('deleteDream');
   
    const response = await fetch(
      `http://localhost:6868/dreams/${value}`,
      {
        // mode: 'no-cors',
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        // body: JSON.stringify(dream),
      }
    ).then(res => res.json());

    console.log(response);
  };

  return (
    <div className='App__buttons_for_Java JavaControls'>
      <p>JAVA</p>
      <div>
        <CustomButton
          onClick={() => loginJava()}
          tabIndex={0}
          width={200}
        >
          Login
        </CustomButton>

        <CustomButton
          onClick={() => createDream()}
          tabIndex={0}
          width={200}
        >
          createDream
        </CustomButton>

        <CustomButton
          onClick={() => updateDream()}
          tabIndex={0}
          width={200}
        >
          Update
        </CustomButton>

        <CustomButton
          onClick={() => takeDream(1)}
          tabIndex={0}
          width={200}
        >
          takeDream
        </CustomButton>

        
        <CustomButton
          onClick={() => getDreamById()}
          tabIndex={0}
          width={200}
        >
          getDreamById
        </CustomButton>

        <CustomButton
          onClick={() => getDreams()}
          tabIndex={0}
          width={200}
        >
          getDreams
        </CustomButton>

        <CustomButton
          onClick={() => getDreamsPage1Dream5()}
          tabIndex={0}
          width={200}
        >
          getDreamsPage1Dream5
        </CustomButton>

        <CustomButton
          onClick={() => getUser()}
          tabIndex={0}
          width={200}
        >
          getUser
        </CustomButton>

        <CustomButton
          onClick={() => getMyHandedDreams()}
          tabIndex={0}
          width={200}
        >
          getMyHandedDreams
        </CustomButton>

        <CustomButton
          onClick={() => deleteDream(1)}
          tabIndex={0}
          width={200}
        >
          deleteDream
        </CustomButton>
      </div>
    </div>
  );
}
