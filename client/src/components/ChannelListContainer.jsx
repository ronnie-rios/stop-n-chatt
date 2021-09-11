import React from 'react';
import Cookies from 'universal-cookie';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChanneList, TeamChannelPreview } from './';
import HospitalIcon from '../assets/assets/hospital.png'
import LogoutIcon from '../assets/assets/logout.png'
const SideBar = () => {
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={HospitalIcon} alt ='Hospital' width='30' />
            </div>
        </div>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={LogoutIcon} alt ='Logout' width='30' />
            </div>
        </div>
    </div>
}


const ChannelListContainer = () => {
    return (
        <div>
            Channel List Container
        </div>
    )
}

export default ChannelListContainer;
