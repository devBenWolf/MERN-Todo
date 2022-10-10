import {useLoginContext} from "../context/loginContext"

const Alert = () => {
  const {alertType, alertText} = useLoginContext()
  return (
    <div className = {`alert alert-${alertType}`}>{alertText}</div>
  )
}

export default Alert