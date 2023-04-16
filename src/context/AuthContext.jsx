import { useState, useContext, createContext } from 'react'

const AuthContext = createContext()

export function useAuthContext() {
    return useContext(AuthContext)
}

function AuthContextProvider({ children }) {

    const [loggedin, setLoggedin] = useState(false)

    return (
        <AuthContext.Provider 
            value={{loggedin}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider