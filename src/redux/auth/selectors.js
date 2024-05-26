export const selectIsLoggedIn = state => state.auth.isLoggedIn
export const selectName = state => state.auth.user.name
export const selectIsRefreshing = state => state.auth.isRefreshing