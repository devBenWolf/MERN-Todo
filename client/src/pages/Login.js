import {useEffect, useState} from "react"
import Alert from "../components/Alert"
import { useLoginContext } from "../context/loginContext"
import Input from "../components/Input"
import { Wrapper } from "../wrappers/Login"
import {useNavigate} from "react-router-dom"


const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: false,
}


const Login = () => {
    const {isLoading, showAlert, displayAlert, handleUser, user} = useLoginContext()
    const [values, setValues] = useState(initialState)

    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                NavigationPreloadManager("/")
            }, 2000)
        }
    }, [user, navigate])

    const handleChange = (event) => {
        const {name, value} = event.target
        setValues({
            ...values,
            [name]: value
        })
        console.log(values)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const {name, email, password, isMember} = values
        if (!email || !password || (!isMember && !name)) {
          displayAlert()
        }
        const currentUser = {name, email, password}
        if (isMember) {
          handleUser({currentUser, endPoint: "login", alertText: "User Logged In. Redirecting..."})
        } else {
            handleUser({currentUser, endPoint: "register", alertText: "User Created. Redirecting..."})
        }
      }

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember, name: ""})
    }


    console.log(user)
  return (
    <Wrapper>
    <form onSubmit = {handleSubmit}>  
            <h3>{values.isMember ? "Login": "Register"}</h3>
            {showAlert && <Alert />}
            <div className = "input-container">
            { !values.isMember && (
                <Input 
                    type            = "text"
                    name            = "name"
                    value           = {values.name}
                    handleChange    =  {handleChange}
                    placeholder     = "Please enter name"
                />
            )}

                <Input 
                    type            = "email"
                    name            = "email"
                    value           = {values.email}
                    handleChange    = {handleChange}  
                    placeholder     = "Please enter email"
                />
                <Input 
                    type            = "password"
                    name            = "password"
                    value           = {values.password}
                    handleChange    = {handleChange}
                    placeholder     = "Please enter password"
                />
            </div>
            <button
                type="submit"
                className = "submit-btn"
                disabled = {isLoading}
            >submit
            </button>
            <div className      = "register-login-div">
                <p className    = "register-login-message">
                    {values.isMember ? "Not a member?" : "Already a member?"}
                </p>
                <p
                    type="button"
                    onClick     = {toggleMember}
                    className   = "register-login-btn"
                >{values.isMember ? "register" : "login"}
                </p>
            </div>
    </form>
    </Wrapper>
  )
}

export default Login
