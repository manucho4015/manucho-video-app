import React, { useContext, useState } from 'react'

import {CopyToClipboard} from 'react-copy-to-clipboard'

import { SocketContext } from '../SocketContext'

const Header = () => {
  const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext)
    const [idToCall, setIdToCall] = useState('')
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <header>
        <h1>Couple Caller <span><i className="fa fa-heartbeat" aria-hidden="true"></i></span></h1>
      <div className="quick-navbar">
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <div className="name-copy">
            <input className='input name' aria-label='Name' placeholder='Preferred Name...' 
              value={name} onChange={(e) => setName(e.target.value)}/>
            {console.log(me)}
            <CopyToClipboard text={me} >
                <button className='btn name-btn' onClick={handleSubmit}><i className="fa fa-clone" aria-hidden="true"></i></button>
            </CopyToClipboard>
          </div>
            <div className="name-paste">
              <input className='input call' aria-label='Name' placeholder='ID to Call...' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
            { callAccepted && !callEnded ? (
                <button className='btn hang-up-btn' onClick={leaveCall}>Hang Up</button>
                ) : (
                <button className='btn call-btn' onClick={() => callUser(idToCall)}>Call</button>
            )}
            </div>
            
        </form>
      </div>
    </header>
  )
}

export default Header
