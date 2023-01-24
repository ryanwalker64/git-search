import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Search from './components/Search'
import ProfileBox from './components/ProfileBox'
import { debounce } from 'lodash'

function profileReducer(state, action) {
  switch(action.type) {
    case 'SEARCH':
      return action.data

    default: throw Error('no type')

  }
}


function App() {
  const [state, dispatch] = useReducer(profileReducer, {})

  const fetchProfile = debounce((searchString) => {
    fetch(`https://api.github.com/search/users?q=${searchString}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch({type: 'SEARCH', data: data})
    })
  }, 500)

  return (
    <div className="App">
      <Search fetchProfile={fetchProfile}/>
      <ProfileBox profiles={state}/>
    </div>
  )
}

export default App

//create search bar
//create profile appear location
//fetch profile and display
// fetch profile on keystroke >> implement debounce