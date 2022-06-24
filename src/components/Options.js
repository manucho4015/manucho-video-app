import e from 'cors'
import React, { useContext, useState } from 'react'

import {CopyToClipboard} from 'react-copy-to-clipboard'

import { SocketContext } from '../SocketContext'

const Options = ({children}) => {
    const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext)
    const [idToCall, setIdToCall] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <aside>
        <article className="call-info">
            <h2>Call Information</h2>
            <div className="description">
                <p>Caller : <span>Manucho</span></p>
                <p>Receiver : <span>Couple Caller</span></p>
            </div>
        </article>
        <article className="call-history">
           <h2>Call History</h2>
           <div className="description">
               <p>Calls Made : <span>10 calls</span></p>
               <p>Calls Received : <span>12 calls</span></p>
               <p>Average Call Length : <span>59 minutes</span></p>
           </div>
        </article>
        <article className="call-actions">
            <h2>Call Actions</h2>
            <div className="description">
                <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                    <input className='input name' aria-label='Name' placeholder='Preferred Name...' value={name} onChange={(e) => setName(e.target.value)} />
                    {console.log(me)}
                    <CopyToClipboard text={me} >
                        <button className='btn name-btn' onClick={handleSubmit}><i className="fa fa-clone" aria-hidden="true"></i></button>
                    </CopyToClipboard>
                    <input className='input call' aria-label='Name' placeholder='ID to Call...' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                    { callAccepted && !callEnded ? (
                        <button className='btn hang-up-btn' onClick={leaveCall}>Hang Up</button>
                        ) : (
                        <button className='btn call-btn' onClick={() => callUser(idToCall)}>Call</button>
                    )}
                </form>
            </div>
        </article>
    </aside>
  )
}

export default Options
