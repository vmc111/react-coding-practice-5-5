// Write your code here
import './index.css'

const Login = props => {
  const {fun} = props

  return (
    <button type="button" className="btn" onClick={fun}>
      Login
    </button>
  )
}

export default Login
