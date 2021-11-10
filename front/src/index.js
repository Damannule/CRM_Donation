import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import Links from './composants/Links'
import Logo from './composants/Logo'
import NavBar from './composants/Navbar'
import UsersList from './pages/UsersList'
import UsersAdd from './pages/UsersAdd'
import UsersUpdate from './pages/UsersUpdate'

export { Links, Logo, NavBar }
export { UsersList, UsersAdd, UsersUpdate }


ReactDOM.render(<App />, document.getElementById('root'));