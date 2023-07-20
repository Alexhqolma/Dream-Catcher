export const baseURL = 'http://localhost:6868';

export const javaEndPoints = {
  dreams: {
    create: '/dreams/create',
    update: '/dreams/',
    take: '/dreams/take-dream/',
    drop: '/dreams/drop-dream/',
    getDreams: '/dreams/',
    getDreamsUser: '/dreams/user/',
    getDreamsHandler: '/dreams/handler',
  },
  user: {
    login: '/auth/login',
    registration: '/auth/registration',
    getAllUsers: '/users',
    deleteUser: '/auth/deleteMe',
  },
  messages: '/messages',
}

