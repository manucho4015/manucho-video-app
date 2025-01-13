import React, { useContext } from 'react'

import { SocketContext } from '../SocketContext'

const Notifications = () => {
    const { answerCall, call, callAccepted} = useContext(SocketContext)
  return (
    <footer>
        {
           call.isReceivedCall && !callAccepted && (

        <div className="receiving-call">
            <h1>{call.name}</h1>
            <p>is calling...</p>
            <button onClick={answerCall}>Answer</button>
        </div>
           )
        }
    </footer>
  )
}

export default Notifications
