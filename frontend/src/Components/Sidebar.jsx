import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationItem from './ConversationItem';
const Sidebar = () => {
    return <div className="sidebar">
        <div className="sb-header">
            <div>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
            </div>
            <div>
                <IconButton>
                    <PersonAddIcon />
                </IconButton>
                <IconButton>
                    <GroupAddIcon />
                </IconButton>
                <IconButton>
                    <AddCircleIcon />
                </IconButton>
                <IconButton>
                    <DarkModeIcon />
                </IconButton>
            </div>
        </div>
        <div className="sb-search">
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input type="text" placeholder='Search' className='searchBox' />
        </div>
        <div className="sb-conversation">
            <ConversationItem props={{ name: "Paras", lastMessage: "Hii", timeStamp: "today" }} />
        </div>
    </div>
}
export default Sidebar;