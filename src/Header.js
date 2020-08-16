import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SeachIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { useStateValue } from './StateProvider'

function Header() {

    const [{ user }] = useStateValue()
    console.log(user?.photoURL)
    return (
        <div className="header">
            <div className="header__left">
                {/* Avatar for logged in user */}
                <Avatar className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                ></Avatar>
                <AccessTimeIcon>

                </AccessTimeIcon>
                {/* Time icon */}
            </div>
            <div className="header__search">
                {/* Search icon */}
                <SeachIcon></SeachIcon>
                {/* Input */}
                <input placeholder="Seach for Machine Learning"></input>
            </div>
            <div className="header__right">
                {/* Help icon */}
                <HelpOutlineIcon></HelpOutlineIcon>
            </div>
        </div>
    )
}

export default Header
