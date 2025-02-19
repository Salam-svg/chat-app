import {useEffect} from "react"
import {io} from "socket.io-client"

const socket = io('http://localhost:4500')
const Chat = () => {
    
    useEffect(() => {
        console.log(socket);
    },[socket])
    
    
  return (
    <div>chat</div>
  )
}

export default Chat