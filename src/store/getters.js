const getters = {
  // user
  roles: state => state.user.roles,
  rights: state => state.user.rights.map(({ content }) => content),
  token: state => state.user.token,
  user: state => state.user.user,
  avatar: state => state.user.avatar,
  userName: state => state.user.user && state.user.user.userName,
  realName: state => state.user.user && state.user.user.realName,
  userId: state => state.user.user && state.user.user.userId,
  routes: state => state.routes.routes
}

export default getters
