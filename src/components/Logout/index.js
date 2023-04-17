// Write your code here
// Write your code here
import './index.css'

const logoutFun = isLogin => {
  this.setState({isLogin: false})
}

const Logout = props => {
  const {isLogin} = props

  return (
    <button type="button" className="btn" onClick={logoutFun}>
      Logout
    </button>
  )
}

export default Logout
