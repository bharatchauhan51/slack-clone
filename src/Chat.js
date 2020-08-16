import React, { useEffect, useState } from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import db from './firebase'
import Message from './Message'
import ChatInput from './ChatInput'

function Chat() {

    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState(null) 

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId)
                .onSnapshot(snapshot => {
                setRoomDetails(snapshot.data())
                })
            
            db.collection('rooms').doc(roomId).
                collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => {
                setRoomMessages(snapshot.docs.map(doc=>doc.data()))
            })
        }

    }, [roomId])
    
    console.log(roomDetails)

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon></InfoOutlinedIcon> Details
                    </p>
                </div>
            </div>        
            <div className="chat__message">
                {/* Messages */}
                {roomMessages?.map(message => (
                    <Message
                        message={message.message}
                        timestamp={message.timestamp}
                        user={message.user}
                        userImage={message.userImage}
                    />
                ))}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId}></ChatInput>
        </div>
    )
}

export default Chat
