import { useEffect, useState } from 'react';
import { selectToken } from '../../store/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { registerUserNODE, SagaActions } from '../../store/sagas/actions';
import { CustomButton } from '../UI/CustomButton';

import './JavaControls.scss';
import { javaEndPoints, baseURL } from '../../api/Java/endPoints';

export const JavaControls: React.FC = () => {
  const dispatch = useAppDispatch();

  const [token, setToken] = useState('');

  const user = {
    "email": "user5@user5.com",
    "password": "12345",
  };

  const registrationJava = async () => {
    console.log('registrationJava');

    console.log(baseURL + javaEndPoints.user.registration)

    const response = await fetch(
      baseURL + javaEndPoints.user.registration,
      {
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
  
  const loginJava = async () => {
    console.log('loginDream');

    // const user = {
    //   "email": "user1@user1.com",
    //   "password": "12345",
    // };
    
    console.log(baseURL + javaEndPoints.user.login)

    const response = await fetch(
      // baseURL + javaEndPoints.user.login,
      'http://localhost:6868/auth/login',
      {
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
      // 'http://localhost:6868/dreams/create',
      baseURL + javaEndPoints.dreams.create,
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

  const updateDream = async (value: number) => {
    console.log('updateDream');

    const dream = {
        "userId": "1",
      "title": "title new dream version 1",
      "body": "body new dream version 2",
    };
    
    const response = await fetch(
      // 'http://localhost:6868/dreams/1',
      baseURL + javaEndPoints.dreams.update + value,
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
      // `http://localhost:6868/dreams/take-dream/${value}`,
      baseURL + javaEndPoints.dreams.take + value,
      {
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

  const dropDream = async (value: number) => {
    console.log('dropDream');

    const dream = {
      "title": "title new dream version 1",
      "body": "body new dream version 2",
    };
    
    const response = await fetch(
      // `http://localhost:6868/dreams/drop-dream/${value}`,
      baseURL + javaEndPoints.dreams.drop + value,
      {
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

  const getDreamById = async (value: number) => {
    console.log('findDreamBuId');
   
    const response = await fetch(
      // 'http://localhost:6868/dreams/1',
      baseURL + javaEndPoints.dreams.getDreams + value,
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
      // 'http://localhost:6868/dreams',
      baseURL + javaEndPoints.dreams.getDreams,
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

  const getDreamsPageSize = async (page: number, size: number) => {
    console.log('getDreamsPage1Dream5');
   
    const response = await fetch(
      // 'http://localhost:6868/dreams?page=1&size=5',
      baseURL + javaEndPoints.dreams.getDreams + `?page=${page}&size=${size}`,
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

  const getDreamsUser = async (value: number) => {
    console.log('getDreams of Users', value);
   
    const response = await fetch(
      // `http://localhost:6868/dreams/user/${value}`,
      baseURL + javaEndPoints.dreams.getDreamsUser + value,
      {
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

  const getDreamsHandler = async () => {
    console.log('getDreams of Handler');
   
    const response = await fetch(
      // `http://localhost:6868/dreams/user/${value}`,
      baseURL + javaEndPoints.dreams.getDreamsHandler,
      {
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

  const getUsers = async () => {
    console.log('getUser');
   
    const response = await fetch(
      // 'http://localhost:6868/users',
      baseURL + javaEndPoints.user.getAllUsers,
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
    ).then(res => console.log(res));
  };

  return (
    <div className='App__buttons_for_Java JavaControls'>
      <p>JAVA</p>
      <div>
        <CustomButton
          onClick={() => registrationJava()}
          tabIndex={0}
          width={200}
        >
          NewUser
        </CustomButton>
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
          onClick={() => updateDream(12)}
          tabIndex={0}
          width={200}
        >
          Update
        </CustomButton>

        <CustomButton
          onClick={() => takeDream(3)}
          tabIndex={0}
          width={200}
        >
          takeDream
        </CustomButton>

        <CustomButton
          onClick={() => dropDream(3)}
          tabIndex={0}
          width={200}
        >
          dropDream
        </CustomButton>

        
        <CustomButton
          onClick={() => getDreamById(1)}
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
          onClick={() => getDreamsPageSize(1, 5)}
          tabIndex={0}
          width={200}
        >
          getDreamsPage1Dream5
        </CustomButton>

        <CustomButton
          onClick={() => getDreamsUser(1)}
          tabIndex={0}
          width={200}
        >
          getDreamsUser
        </CustomButton>

        <CustomButton
          onClick={() => getDreamsHandler()}
          tabIndex={0}
          width={200}
        >
          getDreamsHandler
        </CustomButton>

        <CustomButton
          onClick={() => getUsers()}
          tabIndex={0}
          width={200}
        >
          getUsers
        </CustomButton>

        <CustomButton
          onClick={() => getMyHandedDreams()}
          tabIndex={0}
          width={200}
        >
          getMyHandedDreams
        </CustomButton>

        <CustomButton
          onClick={() => deleteDream(10)}
          tabIndex={0}
          width={200}
        >
          deleteDream
        </CustomButton>
      </div>
    </div>
  );
}
