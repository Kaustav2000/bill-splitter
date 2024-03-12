import React from 'react'
import './UserList.css'
import { data } from '../../Data'
import User from '../User/User'
import AddUserSection from '../AddUserSection/AddUserSection'


const UserList = () => {
    return (
        <div className='userContainer'> 
        <AddUserSection/>
        {data.map((user)=><User key={user.id} user={user}/>)}
            
        </div>
    )
}

export default UserList
