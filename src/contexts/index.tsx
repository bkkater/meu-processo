import React, { createContext, useState, useContext } from 'react'

interface IContext {
  numProcesso: string
  setNumProcesso: React.Dispatch<React.SetStateAction<string>>
  cpfUser: string
  setCpfUser: React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = createContext<IContext>({} as IContext)

const AuthProvider: React.FC = ({children}) => {
  const [numProcesso, setNumProcesso] = useState('')
  const [cpfUser, setCpfUser] = useState('')

  return (
    <AuthContext.Provider
      value={{
        numProcesso,
        setNumProcesso,
        cpfUser,
        setCpfUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
