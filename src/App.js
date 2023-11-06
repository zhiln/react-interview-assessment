import { useEffect, useState } from 'react'
import './App.css'

/*
The goal of this exercise is to go through this pseudo
Pull Request and work with your peer to optimize the code
wherever you see possible.

Are there any areas where you can improve the performance?

Are there any areas for improvement in readability
or where you can improve DRY (Don't repeat yourself)?

How do you approach your Pull Requests overall?
*/

function App() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState('')

  useEffect(() => {
    document.getElementById('user').textContent = selectedUser
  })

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const body = await res.json()
    setUsers(body)
  }

  const fetchSingleUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(body => {
        setUsers(body)
      })
  }

  return (
    <div className="container">
      <h1 id="user">{selectedUser}</h1>
      <div>
        <button onClick={fetchUsers}>Fetch Users</button>
        <button onClick={fetchSingleUser}>Fetch Single User</button>
      </div>
      <div
      >
        {users.map(user => (
          <div
            className={`user ${selectedUser === user.name ? 'highlight' : ''}`}
            onClick={() => setSelectedUser(user.name === selectedUser ? '' : user.name)}>
            <div className="name">{user.name}</div>
            <div>Username: {user.username}</div>
            <div>Phone: {user.phone}</div>
            <div>Email: {user.email}</div>
            <div>Website: {user.website}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
