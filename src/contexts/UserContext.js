import { createContext, useState} from "react";

 const initialUser = {
    id:1,
    name: "Luis",
    favoriteMovies:[1,2,3]
 }

 const UserContext = createContext(initialUser)
  
const UserProvider = ({ children }) => {
    const [user, setUser]=useState(initialUser)
 

  const logout = () => {
     setUser(null)
}
  const login = () => {
  setUser(initialUser)
     
 }

  const data = {user, login, logout}

    
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
        
    )
}

 


export { UserProvider }; 
export default UserContext;
