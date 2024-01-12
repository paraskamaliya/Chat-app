import { Avatar, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";
const ChatArea = ({ props }) => {
    return <div className="chatarea-cont">
        <div className="chatarea-header">
            <Avatar className="con-icon">{props.name[0]}</Avatar>
            <div className="header-text">
                <p className="con-title">{props.name}</p>
                <p className="con-timestamp">{props.timeStamp}</p>
            </div>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </div>
        <div className="message-cont">
            <MessageOthers />
            <MessageSelf />
        </div>
        <div className="chatarea-text">
            <input type="text" placeholder="Type a message" className="searchBox" />
            <IconButton>
                <SendIcon />
            </IconButton>
        </div>
    </div>
}
export default ChatArea;