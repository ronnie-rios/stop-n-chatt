import React from 'react'
import  { AddChannel } from '../assets/';


const TeamChannelList = ({ children, error = false, loading, type }) => {
    if (error) {
        return type ==='team' ? (
            <div className='team-channel-list'>
                <p className='team-channel-list__message'>
                    connection error, please wait and try again
                </p>
            </div>
        ) : null;
    }
    
    if (loading) {
        <div className='team-channel-list'>
                <p className='team-channel-list__message loading'>
                    {type==='team' ? 'Channels' : 'Messages'} loading...
                </p>
            </div>
    }
    return (
        <div>
            <div className='team-channel-list'>
                <div className='team-channel-list__header'>
                    <p className='team-channel-list__header__title'>
                    {type==='team' ? 'Channels' : 'Direct Messages'}
                    </p>
                    {/* Button to add channel */}
                </div>
                {children}
            </div>
        </div>
    )
}

export default TeamChannelList
