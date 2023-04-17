// Write your code here
// Write your code here
import './index.css'

const Logout = props => {
  const {fun} = props

  return (
    <button type="button" className="btn" onClick={fun}>
      Logout
    </button>
  )
}

export default Logout
