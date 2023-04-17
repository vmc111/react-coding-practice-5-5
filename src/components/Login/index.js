// Write your code here
import './index.css'

const loginFun = isLogin => {
  this.setState({isLogin: true})
}

const Login = props => {
  const {isLogin} = props
  return (
    <button type="button" className="btn" onClick={loginFun}>
      Login
    </button>
  )
}

export default Login
