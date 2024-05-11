import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Homework from './views/Homework'

console.log(process.env.APP_NAME)

// Special case testing with the local environment variable.
if (window.location.hostname === 'localhost') {
  console.log(process.env.REACT_APP_ACCESS_TOKEN)
  window.MyDataHelps.setParticipantAccessToken({
    'access_token': process.env.REACT_APP_ACCESS_TOKEN,
    'expires_in': 21600,
    'token_type': 'Bearer'
  }, 'https://mydatahelps.org/')
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Homework/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
