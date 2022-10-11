import {Navigate} from "react-router-dom"
import {useLoginContext} from "../context/loginContext"

const ProtectedRoute = ({children}) => {
    // import value for conditional rendering
    const {user} = useLoginContext()

    if (!user) {
       return <Navigate to="/landing" />
    }

    return children
}
 
export default ProtectedRoute;