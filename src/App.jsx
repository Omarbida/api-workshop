import { Provider } from 'react-redux'
import { Route, Routes, HashRouter } from 'react-router-dom'
import './App.css'
import { store } from './store'
import PostView from './views/postview/PostView'
import Profile from './views/profile/Profile'
import Users from './views/users/Users'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/user/:userId" element={<Profile />} />
            <Route path="/user/:userId/:postId" element={<PostView />} />
            <Route path="*" element={<h1>404 Not found</h1>} />
          </Routes>
        </HashRouter>
      </Provider>
    </div>
  )
}

export default App
