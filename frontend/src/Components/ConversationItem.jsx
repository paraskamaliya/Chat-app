import { Avatar } from "@mui/material";

const ConversationItem = ({ props }) => {
    return <div className="conversation-container">
        <Avatar className="con-icon">{props.name[0]}</Avatar>
        <p className="con-title">{props.name}</p>
        <p className="con-lastMessage">{props.lastMessage}</p>
        <p className="con-timeStamp">{props.timeStamp}</p>
    </div>
}
export default ConversationItem;