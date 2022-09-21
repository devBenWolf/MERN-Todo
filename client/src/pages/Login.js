import {useState, useEffect} from "react"
import Alert from "../components/Alert"
import { useLoginContext } from "../context/loginContext"
import Input from "../components/Input"
import { Wrapper } from "../wrappers/Login"


const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true
}


const Login = () => {
    const {isLoading, showAlert, displayAlert} = useLoginContext()
    const [values, setValues] = useState(initialState)

    console.log(showAlert)

    const handleChange = (event) => {
        const {name, value} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const {name, email, password, isMember} = values
        
        if (!email || !password || (!isMember && !name)) {
            displayAlert()            
        }       
    }

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }



  return (
    <Wrapper>
    <form onSubmit = {handleSubmit}>  
            <h3>{!values.isMember ? "Login": "Register"}</h3>
            {showAlert && <Alert />}
            <div
                className = "input-container"
            >{ values.isMember &&
                    <Input 
                        type            = "text"
                        name            = "name"
                        value           = {values.name}
                        handleChange    =  {handleChange}
                        placeholder     = "Please enter name"
                    />
                }
                <Input 
                    type            = "email"
                    name            = "email"
                    value           = {values.email}
                    hangleChange    = {handleChange}  
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
            >submit
            </button>
            <div className = "register-login-div">
                <p className = "register-login-message">
                    {!values.isMember ? "Not a member yet?" : "Already a member?"}
                </p>
                <p
                    type="button"
                    onClick={toggleMember}
                    className = "register-login-btn"
                >{values.isMember ? "login" : "register"}
                </p>
            </div>
    </form>
    </Wrapper>
  )
}

export default Login
