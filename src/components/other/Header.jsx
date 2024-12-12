// import React from 'react'

// const Header = () => {
//   return (
    
//       <div className="flex items-end justify-between">
//         {/* Left Side */}
//         <div className="text-2xl font-medium">
//           Hello Raj
//         </div>

//         {/* Right Side */}
//         <button
//           className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
//         >
//           Log Out
//         </button>
//       </div>

  
//   );

// }

// export default Header;

// import React from 'react';

// const Header = () => {
//   return (
//     <div className="flex items-center justify-between bg-gray-900 text-white p-4 shadow-lg rounded-md">
//       {/* Left Side */}
//       <div className="text-2xl font-semibold tracking-wide">
//         👋 Hello, Raj
//       </div>

//       {/* Right Side */}
//       <button
//         className="bg-red-600 hover:bg-red-700 text-base font-medium text-white px-5 py-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
//       >
//         Log Out
//       </button>
//     </div>
//   );
// };

// export default Header;





import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
