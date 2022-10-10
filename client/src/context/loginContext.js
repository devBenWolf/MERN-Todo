import { createContext, useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios"
import { CLEAR_ALERT, 
        DISPLAY_ALERT, 
        LOGOUT_USER, 
        USER_BEGIN, 
        USER_ERROR, 
        USER_SUCCESS ,
        TOGGLE_SIDEBAR,
} from "./actions";

const token = localStorage.getItem("token")
const user = localStorage.getItem("user")

export const initialState = {
    isLoading: false,
    showAlert: true,
    alertText: "",
    alertType: "",
    user: user ? JSON.parse(user) : null,
    token: token,
    showSidebar: false
}

export const LoginContext = createContext()

const LoginContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // Register.js
    const displayAlert = () => {
        dispatch({type: DISPLAY_ALERT})
        clearAlert()
    }

    // Register.js by way of displayAlert()
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({type: CLEAR_ALERT})
        }, 3000)
    }

    // add and remove from local storage
    const addUserToLocalStorage = ({user, token}) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
    }

    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    // Register.js
    const handleUser = async (currentUser, endPoint, alertText) =>  {
        dispatch({type: USER_BEGIN})
        try {
            const {data} = await axios.post(`/api/v1/auth/${endPoint}`, currentUser)
            const {user, token} = data
            dispatch({
                type: USER_SUCCESS,
                payload: {
                    user,
                    token,
                    alertText
                }
            })
            addUserToLocalStorage({user, token})
        } catch (error) {
            dispatch({
                type: USER_ERROR,
                payload: { msg: error.response.data.msg },
              })
        }
            clearAlert()      
    }

    const logoutUser = () => {
        dispatch({type: LOGOUT_USER})
        removeUserFromLocalStorage()
    }

    const toggleSidebar = () => {
        dispatch({type: TOGGLE_SIDEBAR})
    }

    return (
        <LoginContext.Provider value = {{
                ...state, displayAlert, handleUser,
                toggleSidebar, logoutUser
            }}
            >
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export default LoginContextProvider