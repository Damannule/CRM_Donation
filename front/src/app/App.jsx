import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from '../composants'
import UsersAdd from '../pages/UsersAdd'
import UsersList from '../pages/UsersList'
import UsersUpdate from '../pages/UsersUpdate'

export { UsersAdd, UsersList, UsersUpdate }

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/users/list" exact element={UsersList} />
        <Route path="/users/add" exact element={UsersAdd} />
        <Route path="/users/update/:id" exact element={UsersUpdate}
        />
      </Routes>
    </Router>
  )
}

export default App