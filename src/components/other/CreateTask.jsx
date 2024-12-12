// import React, { useContext, useState } from 'react'
// import { AuthContext } from '../../context/AuthProvider'

// const CreateTask = () => {

//     const [userData, setUserData] = useContext(AuthContext)

//     const [taskTitle, setTaskTitle] = useState('')
//     const [taskDescription, setTaskDescription] = useState('')
//     const [taskDate, setTaskDate] = useState('')
//     const [asignTo, setAsignTo] = useState('')
//     const [category, setCategory] = useState('')

//     const [newTask, setNewTask] = useState({})

//     const submitHandler = (e) => {
//         e.preventDefault()

//         setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

//         const data = userData

//         data.forEach(function (elem) {
//             if (asignTo == elem.firstName) {
//                 elem.tasks.push(newTask)
//                 elem.taskCounts.newTask = elem.taskCounts.newTask + 1
//             }
//         })
//         setUserData(data)
//         console.log(data);

//         setTaskTitle('')
//         setCategory('')
//         setAsignTo('')
//         setTaskDate('')
//         setTaskDescription('')

//     }

//     return (
//         <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
//             <form onSubmit={(e) => {
//                 submitHandler(e)
//             }}
//                 className='flex flex-wrap w-full items-start justify-between'
//             >
//                 <div className='w-1/2'>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
//                         <input
//                             value={taskTitle}
//                             onChange={(e) => {
//                                 setTaskTitle(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
//                         />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
//                         <input
//                             value={taskDate}
//                             onChange={(e) => {
//                                 setTaskDate(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
//                         <input
//                             value={asignTo}
//                             onChange={(e) => {
//                                 setAsignTo(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
//                         <input
//                             value={category}
//                             onChange={(e) => {
//                                 setCategory(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
//                     </div>
//                 </div>

//                 <div className='w-2/5 flex flex-col items-start'>
//                     <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
//                     <textarea value={taskDescription}
//                         onChange={(e) => {
//                             setTaskDescription(e.target.value)
//                         }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
//                     <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
//                 </div>

//             </form>
//         </div>
//     )
// }

// export default CreateTask




import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <div className='p-6 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-lg mt-5'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between gap-6'
            >
                <div className='w-full md:w-1/2'>
                    <div className='mb-4'>
                        <h3 className='text-sm text-gray-400 font-semibold mb-1'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-2 px-3 w-full md:w-4/5 rounded-md outline-none bg-gray-700 text-gray-200 border border-gray-600 focus:ring focus:ring-emerald-500' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-sm text-gray-400 font-semibold mb-1'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-2 px-3 w-full md:w-4/5 rounded-md outline-none bg-gray-700 text-gray-200 border border-gray-600 focus:ring focus:ring-emerald-500' type="date" />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-sm text-gray-400 font-semibold mb-1'>Assign To</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='text-sm py-2 px-3 w-full md:w-4/5 rounded-md outline-none bg-gray-700 text-gray-200 border border-gray-600 focus:ring focus:ring-emerald-500' type="text" placeholder='employee name' />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-sm text-gray-400 font-semibold mb-1'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-2 px-3 w-full md:w-4/5 rounded-md outline-none bg-gray-700 text-gray-200 border border-gray-600 focus:ring focus:ring-emerald-500' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-full md:w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-400 font-semibold mb-2'>Description</h3>
                    <textarea value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} className='w-full h-44 text-sm py-2 px-3 rounded-md outline-none bg-gray-700 text-gray-200 border border-gray-600 focus:ring focus:ring-emerald-500' name="" id="" placeholder="Describe the task here..."></textarea>
                    <button className='bg-emerald-500 py-3 px-5 rounded-md text-sm text-white mt-4 w-full hover:bg-emerald-600 transition-all shadow-md'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask
