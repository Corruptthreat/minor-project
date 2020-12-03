import React , {useContext,useState , useEffect} from 'react'
import {auth} from '../FirebaseLogin'
import {fireDb} from '../FirebaseLogin'
const AuthContext = React.createContext()
export function useAuth(){
    return useContext(AuthContext)
}
export  function AuthProvider({children}) {
    const [currentUser, setcurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    function signup(email,password,role){
        fireDb.child('users').push({
        email,
        role,
        }
        )
        return auth.createUserWithEmailAndPassword(email,password)
    }
    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function logout(){
        return auth.signOut()
    }
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }
    useEffect(() => {
       const unsubscribe =  auth.onAuthStateChanged(user => {
            setcurrentUser(user)
            setLoading(false)
        })
       return unsubscribe
    }, [])
   
    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
