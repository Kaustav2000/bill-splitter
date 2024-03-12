import React from 'react'
import "./User.css"

const User = ({user}) => {
    return (
        <div className="cover">

        <div className='userName'>
            {user.name}
        </div>
        </div>
    )
}

export default User
