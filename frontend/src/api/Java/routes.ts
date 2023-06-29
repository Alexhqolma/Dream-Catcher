export const baseURL = 'http://localhost:6868';

export const routesServer = {
  dreams: '/dreams',
  user: {
    login: '/auth/login',
    register: '/registration',
    getUser: '/auth/me',
    deleteUser: '/auth/deleteMe',
  },
  messages: '/messages',
}

