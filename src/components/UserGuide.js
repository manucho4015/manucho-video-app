import React from 'react'

const UserGuide = () => {
  return (
    <div className="guide">
        <h1>user guide</h1>
        <div className='call-guide make'>
            <h1>Make A Call:</h1>
            <ol>
                <li>Ask your partner to open the application</li>
                <li>Your partner should then set their preferred name</li>
                <li>Your partner should then copy this name and send it to you through another social media platform</li>
                <li>Paste the link in your application next to the call button</li>
                <li>Click the call button</li>
                <li>Wait for your partner to receive the call</li>
                <li>Talk to you partner</li>
            </ol>
        </div>
        <div class="call-guide receive">
            <h1>Receive A Call</h1>
            <ol>
                <li>Open the application</li>
                <li>Set your preferred name</li>
                <li>Copy this name and send it to your partner through another social media platform</li>
                <li>Wait to receive the call</li>
                <li>An icon will apear towards the bottom of your screen</li>
                <li>Click the call button</li>
                <li>Talk to you partner</li>
            </ol>
        </div>
    </div>
  )
}

export default UserGuide
