import React from 'react'

import Header from  './components/Header'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'
import UserGuide from './components/UserGuide'


const App = () => {
  return (
    <div>
      <Header />
      <VideoPlayer />
      <Options />
      <Notifications />
      <UserGuide />
    </div>
  )
}

export default App
