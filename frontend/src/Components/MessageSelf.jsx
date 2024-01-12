const MessageSelf = () => {
    var props2 = { message: "Hello", timeStamp: "12" }
    return <div className="self-msg-cont">
        <div className="messageBox">
            <p>{props2.message}</p>
            <p className="self-timeStamp">{props2.timeStamp}</p>
        </div>
    </div>
}
export default MessageSelf;