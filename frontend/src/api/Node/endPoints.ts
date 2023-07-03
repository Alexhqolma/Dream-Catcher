export const baseURL = 'http://127.0.0.1:4444';

export const nodeEndPoints = {
  dreams: '/dreams',
  dream: '/dreams/:dreamId',


  user: {
    login: '/auth/login',
    register: '/auth/registration',
    getUser: '/auth/me',
    deleteUser: '/auth/deleteMe',
  },
  messages: '/messages',
}

