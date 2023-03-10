import React from 'react'
import Navbar from './components/Navbar'
import HeadingBanner from './components/HeadingBanner'
import New from './components/New'
import Articles from './components/Articles'

const App = () => {
  return (
    <div className="container" >
      <header><Navbar /></header>
      <div className='main'>
        <HeadingBanner />
        <New />
        <Articles />
      </div>
    </div >
  )
}

export default App