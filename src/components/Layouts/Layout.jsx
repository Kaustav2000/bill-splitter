import React from 'react'
import './Layout.css';
import UserList from '../UserList/UserList';


const Layout = () => {
    return (
        <div className='layout-container'>
            <UserList/>
            <div></div>
        </div>
    )
}

export default Layout
