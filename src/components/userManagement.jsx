import React from 'react'
import totalUsers from "../assets/totalUsers.png"
import userList from "../assets/userList.png"

const UserManagement = () => {
  return (
    
    <div className='flex-col items-center   flex-wrap pt-3 pl-5 pr-5 '>
 

          <div className='flex justify-start pl-20'>
          <img src={totalUsers}  alt="totalusers"/>
          </div>

          <div className='flex justify-center'>
          <img src={userList}  alt="userlist" className='  h-15' />
          </div>
          
        
         
        
    </div>
  )
}

export default UserManagement
