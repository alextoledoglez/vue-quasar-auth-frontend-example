export function setUser (state, data) {
  if (data) {
    state.user = {
      id: data.id,
      email: data.attributes.email,
      name: data.attributes.name,
      roleNames: data.attributes.roleNames
    }
  } else {
    state.user = null
  }
}

export function addLoginCallback (state, data) {
  state.loginCallbacks.push(data)
}
