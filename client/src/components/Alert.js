import {useLoginContext} from "../context/loginContext"

const Alert = () => {
  const {alertType, alertText} = useLoginContext()
  console.log(alertText)
  return (
    <div className = {`alert alert-${alertType}`}>{alertText}</div>
  )
}

export default Alert