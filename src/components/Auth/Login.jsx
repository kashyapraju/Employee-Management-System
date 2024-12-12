// // import React, { useState } from 'react';

// // const Login = ({handelLogin}) => {




// //     const [email, setEmail] = useState('')
// //     const [password, setPassword] = useState('')

// //     const submitHandler = (e) => {
// //         e.preventDefault() // study about this 
// //         handelLogin(email , password)
// //         // console.log("email is ", email)
// //         // console.log("Password is " , password)

// //     }



// //     return (
// //         <div className="flex items-center justify-center min-h-screen bg-black ">
// //             <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md  ">
// //                 <h2 className="text-2xl font-bold text-center text-black mb-4">Login</h2>
// //                 <form

// //                     onSubmit={(e) => {
// //                         submitHandler(e)
// //                     }}>
// //                     <div className="mb-4">
// //                         <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
// //                             Email
// //                         </label>
// //                         <input
// //                             value={email}
// //                             onChange={(e) => {
// //                                 setEmail(e.target.value)
// //                             }}


// //                             type="email"
// //                             id="email"
// //                             name="email"
// //                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
// //                             placeholder="Enter your email"
// //                         />
// //                     </div>
// //                     <div className="mb-6">
// //                         <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
// //                             Password
// //                         </label>
// //                         <input

// //                             value={password}
// //                             onChange={(e) => {
// //                                 setPassword(e.target.value)
// //                             }}


// //                             type="password"
// //                             id="password"
// //                             name="password"
// //                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
// //                             placeholder="Enter your password"
// //                         />
// //                     </div>
// //                     <button
// //                         type="submit"
// //                         className="w-full py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
// //                     >
// //                         Login
// //                     </button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;




// import React, { useState } from 'react'

// const Login = ({handleLogin}) => {

    

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')


//     const submitHandler = (e)=>{
//         e.preventDefault()
//         handleLogin(email,password)
//         setEmail("")
//         setPassword("")
//     }


//   return (
//     <div className='flex h-screen w-screen items-center justify-center'>
//         <div className='border-2 rounded-xl border-emerald-600 p-20'>
//             <form 
//             onSubmit={(e)=>{
//                 submitHandler(e)
//             }}
//             className='flex flex-col items-center justify-center'
//             >
//                 <input 
//                 value={email}
//                 onChange={(e)=>{
//                     setEmail(e.target.value)
//                 }}
//                 required 
//                 className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
//                 />
//                 <input
//                 value={password}
//                 onChange={(e)=>{
//                     setPassword(e.target.value)
//                 }}
//                 required 
//                 className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
//                 <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login



import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="border-2 rounded-xl border-emerald-600 bg-gray-800 p-10 shadow-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          <h1 className="text-2xl font-bold text-emerald-500 mb-4">Welcome Back!</h1>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-gray-200 font-medium text-lg py-3 px-6 rounded-full placeholder:text-gray-400 focus:ring focus:ring-emerald-500 focus:border-emerald-500 w-full"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-gray-200 font-medium text-lg py-3 px-6 rounded-full placeholder:text-gray-400 focus:ring focus:ring-emerald-500 focus:border-emerald-500 w-full"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-4 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-3 px-10 w-full rounded-full transition-all shadow-md">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
