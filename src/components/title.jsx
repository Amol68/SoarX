import React from 'react'
import sortButton from '../assets/sort_button.png'; 

const Title = () => {
  return (
    <div className="bg-white py-2 flex items-center  justify-between">

        <div className='text-3xl font-bold font-sans pl-10 pt-10'>Past Events</div>

        <div className='flex items-center pt-10 pr-20'>
          <img src={sortButton} alt='img'></img>
        </div>

       
    </div>
  )
}

export default Title
