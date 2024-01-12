import { Avatar } from "@mui/material";

const MessageOthers = () => {
    var props1 = { name: "Paras", message: "Hii" }
    return <div className="other-msg-cont">
        <div className="conversation-container">
            <Avatar className="con-icon">{props1.name[0]}</Avatar>
            <div className="other-text-content">
                <p className="con-title">{props1.name}</p>
                <p className="con-lastMessage">{props1.message}</p>
                <p className="self-timeStamp">12:00 AM</p>
            </div>
        </div>
    </div>
}
export default MessageOthers;