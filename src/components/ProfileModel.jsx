import React from 'react'

const ProfileModel = (props) => {
    const {isVisible} = props
  return (
    <>{isVisible &&
    <div className='w-full h-screen bg-gray-900 opacity-50 absolute text-center'>
        
        <div className='p-3 h-[300px] absolute bottom-0 bg-red-800 opacity-50  w-full z-50'>
            <p className='font-bold'>Change profile photo</p>

        </div>
        
    </div>
}
    </>
    
    
  )
}

export default ProfileModel