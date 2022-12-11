import React, { useState } from 'react'

// Create the context
export const UserContext = React.createContext()

// Create a provider for the context
export const UserProvider = ({ children }) => {
  // State to hold the user information
  const [user, setUser] = useState(null)

  // Actions object with a login method
  const actions = {
    login: userInfo => {
      // Set the user in the state
      setUser(userInfo)
    }
  }

  // Return the provider with the context and actions
  return (
    <UserContext.Provider value={{ user, actions }}>
      {children}
    </UserContext.Provider>
  )
}

