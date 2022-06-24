import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'

const VideoPlayer = () => {
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext)
  return (
    <main>
        <article className="caller-card caller1">
            {
                stream && (
                    <video playsInline muted ref={myVideo} autoPlay className='video'/>
                )
            }
            <div className="name-tag">
                <p>{name || 'Manucho' }</p>
            </div>
        </article>
        <article className="caller-card caller2">
            {
                callAccepted && !callEnded && (
                    <video playsInline  ref={userVideo} autoPlay className='video'/>
                )
            }
            {
                call.isRecievedCall && !callAccepted && (
            <div className="loading-call">
                <span><i className="fa fa-spinner" aria-hidden="true"></i></span>
                <p>Calling...</p>
            </div>
                )
            }
            <div className="name-tag">
                <p>{call.name || 'Couple Caller'}</p>
            </div>
        </article>
    </main>
  )
}

export default VideoPlayer
