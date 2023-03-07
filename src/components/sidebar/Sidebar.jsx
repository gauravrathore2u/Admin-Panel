import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import StoreIcon from '@mui/icons-material/Store';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FitbitIcon from '@mui/icons-material/Fitbit';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../contextapi/darkModeContext';

function Sidebar() {

    const {dispatch} = useContext(DarkModeContext)

    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to='/' style={{textDecoration:"none"}}>
                    <span className='logo'>Hi! Admin</span>
                </Link>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to='/users' style={{textDecoration:"none"}}>
                    <li>
                        <PersonIcon className='icon' />
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to='/products' style={{textDecoration:"none"}}>
                    <li>
                        <StoreIcon className='icon' />
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                        <Inventory2Icon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <DeliveryDiningIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <BarChartIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className='icon' />
                        <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <HealthAndSafetyIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <FitbitIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsSuggestIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AssignmentIndIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon' />
                        <span>Logout</span>
                    </li>


                </ul>
            </div>
            <div className='bottom'>
                <div className="colorOption" onClick={()=>dispatch({type:'LIGHT'})}></div>
                <div className="colorOption" onClick={()=>dispatch({type:'DARK'})}></div>
            </div>
        </div>
    )
}

export default Sidebar
