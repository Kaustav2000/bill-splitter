import React from 'react'
import "./User.css"

const User = ({user}) => {
    return (
        <div className="cover">

        <div className='userName'>
            <div className='userName-content'>
            <p>{user.name}</p>
            <p>He/She owes you $100</p>
            </div>
            <button className='splitBtn'>Split</button>

        </div>
        </div>
    )
}

export default User
