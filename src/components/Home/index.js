import {Component} from 'react'
import './index.css'
import Message from '../Message/index'
import Login from '../Login/index'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  loginFun = () => this.setState({isLogin: true})

  logoutFun = () => this.setState({isLogin: false})

  render() {
    const {isLogin} = this.state
    // console.log(isLogin)

    const message = isLogin ? 'Welcome User' : 'Please Login'
    const btnEle = !isLogin ? (
      <Login isLogin={isLogin} fun={this.loginFun} />
    ) : (
      <Logout isLogin={isLogin} fun={this.logoutFun} />
    )

    return (
      <div className="home-bg">
        <div className="card">
          <Message message={message} />
          {btnEle}
        </div>
      </div>
    )
  }
}

export default Home
